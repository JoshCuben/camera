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
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});