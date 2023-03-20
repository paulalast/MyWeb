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
	if (scrollPosition > offersPosition - windowHeight + 100) {
		$("#card1").addClass("animate__animated animate__fadeInUp animate__slow animate__delay-1s ")
		$("#card2").addClass(
			"animate__animated animate__fadeInUp  animate__delay-2s"
		)
		$("#card3").addClass(
			"animate__animated animate__fadeInUp  animate__delay-3s"
		)
		$(".hr2").addClass("hr2 longAnima")
	}
})


//   function onIntersection(entries, observer) {
// 	entries.forEach((entry) => {
// 	  if (entry.isIntersecting) {
// 		entry.target.classList.add(entry.target.dataset.animation);
// 		// entry.target.classList.add("visible");
// 	  } else {
// 		entry.target.classList.remove(entry.target.dataset.animation);
// 		// entry.target.classList.remove("visible");
// 	  }
// 	});
//   }
  
//   const observerOptions = {
// 	root: null,
// 	rootMargin: "0px",
// 	threshold: .3,
//   };
  
//   const observer = new IntersectionObserver(onIntersection, observerOptions);
  
//   const elements = [
// 	".about__img",
// 	".about__text",
// 	"#card1",
// 	"#card2",
// 	"#card3",
// 	".hr2",
//   ];
  
//   elements.forEach((selector) => {
// 	const element = document.querySelector(selector);
// 	observer.observe(element);
//   });
  