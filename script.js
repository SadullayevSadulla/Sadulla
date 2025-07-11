const toggleBtn = document.getElementById('menuToggle');
const nav = document.querySelector('.main-nav');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});
// Qidiruv funksiyasi
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const cards = document.querySelectorAll(".product-card");

  cards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
});
// Buyurtma formasi yuborilganda alert
document.querySelector(".checkout-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Rahmat! Buyurtmangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.");
});
// CONTACT FORM SUBMIT
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Xabaringiz yuborildi! Tez orada siz bilan bog'lanamiz.");
});
