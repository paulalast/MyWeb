const cookieBox = document.querySelector(".cookie__box")
const cookieBtn = document.querySelector(".cookie-btn")

const showCookie = () => {
	const cookieEaten = localStorage.getItem("cookie")
	if (cookieEaten) {
		cookieBox.classList.add("hide__cookie")
	}
}

const handleCookieBox = () => {
	localStorage.setItem("cookie", "true")
	cookieBox.classList.add("hide__cookie")
}

cookieBtn.addEventListener("click", handleCookieBox)
showCookie()
