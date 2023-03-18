// let animationPlayed = false

// $(window).scroll(function () {
// 	const aboutMePosition = $("#aboutme").offset().top
// 	const scrollPosition = $(window).scrollTop()
// 	const windowHeight = $(window).height()
// 	const offersPosition = $("#offers").offset().top

// 	if (scrollPosition > aboutMePosition - windowHeight) {
// 		$("#aboutme").addClass("animate__fadeInLeft animate__slow")

// 		$(".about__text").addClass(
// 			"animate__animated animate__fadeInRight animate__slow"
// 		)
// 	}
// 	if (scrollPosition > offersPosition - windowHeight + 300) {
// 		$("#card1").addClass("animate__animated animate__fadeInUp animate__slow animate__delay-1s ")
// 		$("#card2").addClass(
// 			"animate__animated animate__fadeInUp  animate__delay-2s"
// 		)
// 		$("#card3").addClass(
// 			"animate__animated animate__fadeInUp  animate__delay-3s"
// 		)
// 		$(".hr2").addClass("hr2 longAnima")
// 	}
// })

function onIntersection(entries, observer) {
	entries.forEach((entry) => {
	  if (entry.isIntersecting) {
		entry.target.classList.add(entry.target.dataset.animation);
	  } else {
		entry.target.classList.remove(entry.target.dataset.animation);
	  }
	});
  }
  
  const observerOptions = {
	root: null,
	rootMargin: "0px",
	threshold: 0.1,
  };
  
  const observer = new IntersectionObserver(onIntersection, observerOptions);
  
  const elements = [
	".about__img",
	".about__text",
	"#card1",
	"#card2",
	"#card3",
	".hr2",
  ];
  
  elements.forEach((selector) => {
	const element = document.querySelector(selector);
	observer.observe(element);
  });
  