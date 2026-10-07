document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const feedbackDiv = document.querySelector(".form-feedback");
    const successMessage = document.querySelector(".success-message");
    const submitButton = document.querySelector("form button[type='submit']");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = emailInput.value.trim();

            if (!email) {
                if (feedbackDiv) {
                    feedbackDiv.textContent = "Por favor, preencha o campo de e-mail.";
                }
                emailInput.focus();
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                if (feedbackDiv) {
                    feedbackDiv.textContent = "Por favor, insira um e-mail válido.";
                }
                emailInput.focus();
                return;
            }

            if (feedbackDiv) {
                feedbackDiv.textContent = "";
            }

            if (submitButton) {
                submitButton.disabled = true;
            }

            form.style.display = "none";

            if (successMessage) {
                successMessage.removeAttribute("hidden");
            }
        });
    }
});