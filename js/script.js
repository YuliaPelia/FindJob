window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".promo_header_menu"),
    menuItem = document.querySelectorAll(".menu_items"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("promo_header_menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("promo_header_menu_active");
    });
  });
});
