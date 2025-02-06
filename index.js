document.addEventListener("DOMContentLoaded", function () {
    var navToggler = document.querySelector(".navbar-toggler");
    var navCollapse = document.querySelector("#navbarNav");
  
    navToggler.addEventListener("click", function () {
      if (navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
      }
    });
  });
  