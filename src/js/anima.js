let animationPlayed = false

$(window).scroll(function () {
	const aboutMePosition = $("#aboutme").offset().top
	const scrollPosition = $(window).scrollTop()
	const windowHeight = $(window).height()
	const offersPosition = $("#offers").offset().top

	if (scrollPosition > aboutMePosition - windowHeight) {
		$("#aboutme").addClass("animate__fadeInLeft animate__slow")

		$(".about__text").addClass(
			"animate__animated animate__fadeInRight animate__slow"
		)
	}
	if (scrollPosition > offersPosition - windowHeight + 50) {
		$("#card1").addClass(
			"animate__animated animate__fadeInUp animate__slow animate__delay-1s "
		)
		$("#card2").addClass(
			"animate__animated animate__fadeInUp  animate__delay-2s"
		)
		$("#card3").addClass(
			"animate__animated animate__fadeInUp  animate__delay-3s"
		)
		$(".more__info").addClass(
			"animate__animated animate__fadeIn  animate__delay-4s animate__slower"
		)
		$(".hr2").addClass("hr2 longAnima")
	}
})
