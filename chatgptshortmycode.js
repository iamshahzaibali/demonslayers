const btn1 = document.querySelector("#btn1");
const entry_page = document.querySelector("#entry");
const game_pg1 = document.querySelector("#game-pg1");

btn1.addEventListener("click", () => {
    entry_page.style.display = "none";
    game_pg1.classList.remove("hidden");
});

// Elements
const total = document.querySelector("#total");
const upperlevels = document.querySelector("#upperlevels");

// Mouse Move Handler
window.addEventListener("mousemove", () => {
    const currentTotal = parseFloat(total.textContent) || 0;
    upperlevels.classList.toggle("bg-[green]", currentTotal >= 1001);
    upperlevels.classList.toggle("bg-[red]", currentTotal < 1001);
});

// Upper Level Unlock
upperlevels.addEventListener("click", () => {
    const currentTotal = parseFloat(total.textContent) || 0;
    if (currentTotal >= 1001) {
        showAlert("The Upper 3 Unlocked!");
        total.textContent = currentTotal - 1000;
    } else {
        showAlert("1000$ to unlock Upper Levels");
    }
});

// Betting Logic
const betAmounts = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600];

betAmounts.forEach(amount => {
    const betBtn = document.querySelector(`#bet-${amount}`);
    if (!betBtn) return;

    betBtn.addEventListener("click", () => {
        let currentTotal = parseFloat(total.textContent) || 0;

        if (currentTotal >= amount) {
            const result = Math.random() > 0.49999999;
            const change = result ? amount : -amount;
            total.textContent = currentTotal + change;

            showAlert(result 
                ? `Congratulations! You Won ${amount}$`
                : `Sorry! You Lost ${amount}$`);
        } else {
            showAlert("You do not have sufficient funds...");
        }
    });
});