const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
const hamIcon = hamburger.querySelector('.hamburger-icon');
const crossIcon = hamburger.querySelector('.cross-icon');

hamburger.addEventListener('click', () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    hamIcon.style.display = "inline-block";
    crossIcon.style.display = "none";
  } else {
    menu.style.display = "block";
    hamIcon.style.display = "none";
    crossIcon.style.display = "inline-block";
  }
});

