document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }
  const glightbox = glightbox({
    selector: '.glightbox'
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var collapsibleMenu = document.getElementById("collapsibleMenu");

  menuButton.addEventListener("click", function () {
    collapsibleMenu.classList.toggle("show-menu");
  });

  document.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !collapsibleMenu.contains(event.target)) {
      collapsibleMenu.classList.remove("show-menu");
    }
  });
});