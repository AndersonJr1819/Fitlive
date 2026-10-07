document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePasswordButton = passwordInput.nextElementSibling;
    const form = document.querySelector("form");
    const emailInput = document.getElementById("email");
    const rememberCheckbox = document.querySelector("input[name='remember']");

    if (togglePasswordButton) {
        togglePasswordButton.addEventListener("click", () => {
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
            passwordInput.setAttribute("type", type);
            const icon = togglePasswordButton.querySelector("i");
            if (icon) {
                const currentIcon = icon.getAttribute("data-lucide");
                if (currentIcon === "eye") {
                    icon.setAttribute("data-lucide", "eye-off");
                } else {
                    icon.setAttribute("data-lucide", "eye");
                }
                if (window.lucide && typeof window.lucide.createIcons === "function") {
                    window.lucide.createIcons();
                }
            }
        });
    }

    if (rememberCheckbox && emailInput) {
        const savedEmail = localStorage.getItem("fitlive_remembered_email");
        if (savedEmail) {
            emailInput.value = savedEmail;
            rememberCheckbox.checked = true;
        }
    }

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            if (!email || !password) {
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return;
            }

            if (rememberCheckbox && rememberCheckbox.checked) {
                localStorage.setItem("fitlive_remembered_email", email);
            } else {
                localStorage.removeItem("fitlive_remembered_email");
            }

            sessionStorage.setItem("fitlive_logged_in", "true");
            window.location.href = "home.html";
        });
    }
});