import "regenerator-runtime/runtime"

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
	input.forEach(input => {
		if (input.value === "") {
			showError(input, input.placeholder)
		} else {
			clearError(input)
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

	allInputs.forEach(input => {
		if (input.classList.contains("error")) {
			errorCount++
		}
	})

	if (errorCount === 0) {
		popup.classList.add("show-popup")
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
document
	.getElementById("contact-form")
	.addEventListener("submit", async function (event) {
		event.preventDefault()

		checkForm([username, email, message])
		checkLength(username, 2)
		checkEmail(email)
		if (!checkErrors()) {
			try {
				const response = await fetch("../../contact-form-handler.php", {
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
					const responseData = await response.text()
					if (responseData === "Dziękuję! Twoja wiadomość została wysłana.") {
						popup.classList.add("show-popup")
						username.value = ""
						email.value = ""
						message.value = ""
					} else {
						alert(
							"Wystąpił problem z wysłaniem Twojej wiadomości. Proszę spróbować ponownie."
						)
					}
				} else {
					alert(
						"Wystąpił problem z wysłaniem Twojej wiadomości. Proszę spróbować ponownie."
					)
				}
			} catch (error) {
				alert(
					"Wystąpił problem z wysłaniem Twojej wiadomości. Proszę spróbować ponownie."
				)
			}
		}
	})
