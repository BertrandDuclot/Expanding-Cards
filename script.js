const panels = document.querySelectorAll(".panel");

// Adding the active class to the image clicked
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});

// Removing the active class to all panels
function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
