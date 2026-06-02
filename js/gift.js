//  Donation Modal
document.addEventListener("DOMContentLoaded", () => {
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("closeModal");
    const donationModal = document.getElementById("donationModal");

    if (!donationModal) return;

    if (openModal) {
        openModal.addEventListener("click", () => {
            donationModal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", () => {
            donationModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === donationModal) {
            donationModal.style.display = "none";
        }
    });
});
