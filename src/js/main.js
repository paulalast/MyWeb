const nav = document.querySelector(".nav")
const navBtn = document.querySelector(".burger-btn")
const allNavItems = document.querySelectorAll(".nav__item")
const navBtnBars = document.querySelector(".burger-btn__bars")
const footerYear = document.querySelector(".footer__year")
const allSections = document.querySelectorAll(".section")

const handleNav = () => {
	nav.classList.toggle("nav--active")

	allNavItems.forEach(item => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active")
		})
	})

	handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
	let delayTime = 0

	allNavItems.forEach(item => {
		item.classList.toggle("nav-items-animation")
		item.style.animationDelay = "." + delayTime + "s"
		delayTime++
	})
}

const handleObserver = () => {
	const currentSection = window.scrollY

	allSections.forEach(section => {
		if (
			section.classList.contains("black-section") &&
			section.offsetTop <= currentSection + 0
		) {
			navBtnBars.classList.add("white-bars-color")
		} else if (
			!section.classList.contains("black-section") &&
			section.offsetTop <= currentSection + 0
		) {
			navBtnBars.classList.remove("white-bars-color")
		}
	})
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener("click", handleNav)
window.addEventListener("scroll", handleObserver)

handleCurrentYear()
