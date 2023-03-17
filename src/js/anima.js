let animationPlayed = false

$(window).scroll(function () {
	const aboutMePosition = $("#aboutme").offset().top
	const scrollPosition = $(window).scrollTop()
	const windowHeight = $(window).height()
	const offersPosition = $("#offers").offset().top

	if (scrollPosition > aboutMePosition - windowHeight) {
		$("#portraitIMG").addClass("animate__fadeInLeft animate__slow ")
		$(".about__text-info").addClass(
			"animate__animated animate__fadeInRight animate__slow"
		)
	}
	if (scrollPosition > offersPosition - windowHeight) {
		$("#card1").addClass("animate__animated animate__fadeInUp animate__slow ")
		$("#card2").addClass(
			"animate__animated animate__fadeInUp  animate__delay-1s"
		)
		$("#card3").addClass(
			"animate__animated animate__fadeInUp  animate__delay-2s"
		)
	}
})
