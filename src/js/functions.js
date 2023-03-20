// const username = document.querySelector("#username")
// const email = document.querySelector("#email")
// const message = document.querySelector("#textarea")
// const sendBtn = document.querySelector(".send")
// const popup = document.querySelector(".form__popup")
// const closeBtn = document.querySelector(".form__popup-close")
// const input = document.querySelectorAll("input")

// document.getElementById("contact-form").addEventListener("submit", e => {
// 	e.preventDefault()
// 	checkForm([username, email, message])
// 	checkLength(username, 2)
// 	checkEmail(email)
// 	checkErrors()
// })

// const showError = (input, msg) => {
// 	const formBox = input.parentElement
// 	const errorMsg = formBox.querySelector(".error-text")

// 	formBox.classList.add("error")
// 	errorMsg.textContent = msg
// }

// const clearError = input => {
// 	const formBox = input.parentElement
// 	formBox.classList.remove("error")
// }

// const checkForm = input => {
// 	input.forEach(el => {
// 		if (el.value === "") {
// 			showError(el, el.placeholder)
// 		} else {
// 			clearError(el)
// 		}
// 	})
// }

// const checkLength = (input, min) => {
// 	if (input.value.length < min) {
// 		showError(
// 			input,
// 			`${input.previousElementSibling.innerText.slice(
// 				0,
// 				-1
// 			)} must be at least ${min} characters long.`
// 		)
// 	}
// }

// const checkEmail = email => {
// 	const re =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 	if (re.test(email.value)) {
// 		clearError(email)
// 	} else {
// 		showError(email, "The email is invalid.")
// 	}
// }

// const checkErrors = () => {
// 	const allInputs = document.querySelectorAll(".form-box")
// 	let errorCount = 0

// 	allInputs.forEach(el => {
// 		if (el.classList.contains("error")) {
// 			errorCount++
// 		}
// 	})

// 	if (errorCount === 0) {
// 		popup.classList.add("show-popup")
// 		clearError(el)
// 		username.value = ""
// 		email.value = ""
// 		message.value = ""
// 	}
// }

// const closePopup = () => {
// 	popup.classList.remove("show-popup")
// 	const allInputs = document.querySelectorAll(".form-box")
// }

// // const mySwiper = new Swiper(".swiper-container", {
// // 	pagination: {
// // 		el: ".swiper-pagination",
// // 	},
// // 	navigation: {
// // 		nextEl: ".swiper-button-next",
// // 		prevEl: ".swiper-button-prev",
// // 	},
// // 	autoplay: {
// // 		delay: 8000,
// // 	},
// // 	speed: 800,
// // })

// sendBtn.addEventListener("click", e => {
// 	e.preventDefault()
// 	checkForm([username, email, message])
// 	checkLength(username, 2)
// 	checkEmail(email)
// 	checkErrors()
// })

// closeBtn.addEventListener("click", closePopup)

const username = document.querySelector("#username")
const email = document.querySelector("#email")
const message = document.querySelector("#textarea")
const popup = document.querySelector(".form__popup")
const closeBtn = document.querySelector(".form__popup-close")

document.getElementById("contact-form").addEventListener("submit", e => {
	e.preventDefault()
	checkForm([username, email, message])
	checkLength(username, 2)
	checkEmail(email)
	checkErrors()
})

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector(".error-text")

	formBox.classList.add("error")
	errorMsg.textContent = msg
}

const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove("error")
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} must be at least ${min} characters long.`
		)
	}
}

const checkEmail = email => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, "The email is invalid.")
	}
}

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".form-box")
	let errorCount = 0

	allInputs.forEach(el => {
		if (el.classList.contains("error")) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add("show-popup")
		clearError(el)
		username.value = ""
		email.value = ""
		message.value = ""
		return true
	} else {
		return false
	}
}

const closePopup = () => {
	popup.classList.remove("show-popup")
	const allInputs = document.querySelectorAll(".form-box")
}

closeBtn.addEventListener("click", closePopup)

document.getElementById("contact-form").addEventListener("submit", async e => {
	e.preventDefault()
	checkForm([username, email, message])
	checkLength(username, 2)
	checkEmail(email)
	if (!checkErrors()) {
		try {
			const response = await fetch("send_email.php", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					username: username.value,
					email: email.value,
					textarea: message.value,
				}),
			})

			if (response.ok) {
				popup.classList.add("show-popup")
				username.value = ""
				email.value = ""
				message.value = ""
			} else {
				alert("There was a problem submitting your message. Please try again.")
			}
		} catch (error) {
			alert("There was a problem submitting your message. Please try again.")
		}
	}
})
