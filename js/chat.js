    document.addEventListener("DOMContentLoaded", function () {
        const chatButton = document.getElementById("chat-button");
        const chatWidget = document.getElementById("chat-widget");

        chatButton.addEventListener("click", function () {
            chatWidget.style.display = chatWidget.style.display === "block" ? "none" : "block";
        });

        // Ajoutez d'autres fonctionnalités de chat ici si nécessaire
    });

