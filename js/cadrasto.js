document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const avatarInput = document.getElementById("avatar-input");
    const avatarImg = document.querySelector(".profile-avatar img");
    const passwordToggleButtons = document.querySelectorAll("form button[type='button']");

    let avatarBase64 = "";

    if (avatarInput) {
        avatarInput.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file && file.type.startsWith("image/")) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarBase64 = e.target.result;
                    if (avatarImg) {
                        avatarImg.src = avatarBase64;
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }

    passwordToggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const container = button.parentElement;
            const input = container.querySelector("input[type='password'], input[type='text']");
            if (input) {
                if (input.type === "password") {
                    input.type = "text";
                } else {
                    input.type = "password";
                }
            }
        });
    });

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (!name || !email || !password || !confirmPassword) {
                return;
            }

            if (password !== confirmPassword) {
                return;
            }

            const userData = {
                name: name,
                email: email,
                avatar: avatarBase64
            };

            localStorage.setItem("fitlive_user", JSON.stringify(userData));

            window.location.href = "home.html";
        });
    }
});