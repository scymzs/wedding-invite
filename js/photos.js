const buttons = document.querySelectorAll(".filter-tabs button");
const cards = document.querySelectorAll(".photo-card");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        // active state
        buttons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        cards.forEach((card) => {
            const category = card.getAttribute("data-category");

            if (filter === "all") {
                card.style.display = "block";
            } else {
                if (category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            }
        });
    });
});
