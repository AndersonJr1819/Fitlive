document.addEventListener("DOMContentLoaded", () => {
    const bottomNavLinks = document.querySelectorAll(".bottom-navigation a");
    const aiChatButtons = document.querySelectorAll(".ai-chat-messages button");
    const aiChatInput = document.querySelector(".ai-chat-input-area input");
    const aiChatSendButton = document.querySelector(".ai-chat-input-area button[type='button']");
    const searchInput = document.querySelector(".search-bar input");

    bottomNavLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            bottomNavLinks.forEach(el => el.classList.remove("active"));
            link.classList.add("active");
        });
    });

    aiChatButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (aiChatInput) {
                aiChatInput.value = button.textContent;
                aiChatInput.focus();
            }
        });
    });

    if (aiChatSendButton && aiChatInput) {
        aiChatSendButton.addEventListener("click", () => {
            const message = aiChatInput.value.trim();
            if (message) {
                aiChatInput.value = "";
            }
        });

        aiChatInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const message = aiChatInput.value.trim();
                if (message) {
                    aiChatInput.value = "";
                }
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const query = searchInput.value.trim();
                if (query) {
                    searchInput.value = "";
                }
            }
        });
    }
});