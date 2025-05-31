function showAlert(message, duration = 2000) {
    const alertRoot = document.getElementById("alert-root");

    const alertBox = document.createElement("div");
    alertBox.className = "alert-box";
    alertBox.innerHTML = `
        <span>${message}</span>
        <button class="alert-close" onclick="this.parentElement.remove()">&times;</button>
    `;

    alertRoot.appendChild(alertBox);

    setTimeout(() => {
        alertBox.remove();
    }, duration);
}