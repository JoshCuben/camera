document.querySelectorAll(".card").forEach(card => {

  const details = card.querySelector(".details");
  const back = card.querySelector(".backBtn");

  details.addEventListener("click", () => {
    card.classList.add("active");
  });

  back.addEventListener("click", () => {
    card.classList.remove("active");
  });

});

/* DARK MODE */

const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* FLIP CARD */

document.querySelectorAll(".card").forEach(card => {

  const details = card.querySelector(".details");
  const back = card.querySelector(".backBtn");

  details.addEventListener("click", () => {
    card.classList.add("active");
  });

  back.addEventListener("click", () => {
    card.classList.remove("active");
  });

});
