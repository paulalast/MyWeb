const form = document.querySelector("#contact-form")
const popup = document.querySelector("#popup")
const closeBtn = document.querySelector(".form__popup-close")
const sendBtn = document.querySelector(".send")

form.addEventListener("submit", function (e) {
	e.preventDefault()
	e.stopPropagation()

	const username = document.querySelector("#username")
	const email = document.querySelector("#email")
	const textarea = document.querySelector("#textarea")

	let isValid = true

	if (username.value.trim() === "") {
		showError(username, "Imię jest wymagane.")
		isValid = false
	} else {
		clearError(username)
	}

	if (email.value.trim() === "") {
		showError(email, "E-mail jest wymagany.")
		isValid = false
	} else if (!isValidEmail(email.value.trim())) {
		showError(email, "Nieprawidłowy format adresu e-mail.")
		isValid = false
	} else {
		clearError(email)
	}

	if (textarea.value.trim() === "") {
		showError(textarea, "Wiadomość jest wymagana.")
		isValid = false
	} else {
		clearError(textarea)
	}

	if (isValid) {
		const formData = new FormData()
		formData.append("username", username.value.trim())
		formData.append("email", email.value.trim())
		formData.append("textarea", textarea.value.trim())

		axios
			.post("contact-form-handler.php", formData)
			.then(response => {
				popup.style.display = "block"
				form.reset()
			})
			.catch(error => {
				console.error(error)
				alert("Wystąpił błąd podczas wysyłania formularza.")
			})
	}
})

closeBtn.addEventListener("click", () => {
	popup.style.display = "none"
})

const showError = (input, message) => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".error-text")

	formBox.classList.add("error")
	errorText.innerText = message
}

const clearError = input => {
	const formBox = input.parentElement
	const errorText = formBox.querySelector(".error-text")

	formBox.classList.remove("error")
	errorText.innerText = ""
}

const isValidEmail = email => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return regex.test(email)
}
