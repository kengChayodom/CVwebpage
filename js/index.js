

const profileImg = document.querySelector('.profile-img');
if (profileImg) {
  profileImg.addEventListener('mouseenter', () => {
    profileImg.style.transform = 'scale(1.1)';
    profileImg.style.transition = 'transform 0.3s ease';
    profileImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  });

  profileImg.addEventListener('mouseleave', () => {
    profileImg.style.transform = 'scale(1)';
    profileImg.style.boxShadow = 'none';
  });
}

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");


  progressBars.forEach(bar => {
    bar.style.width = "0%";
    bar.style.transition = "width 1.5s cubic-bezier(0.25, 0.8, 0.25, 1)"; 
  });

  function showSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2; 

    
    if (sectionPos < screenPos) {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width") + "%";
        bar.style.width = targetWidth;
      });
    }
  }

  
  window.addEventListener("scroll", showSkills);
  showSkills(); 
});




document.addEventListener("DOMContentLoaded", function() {
 
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  
  const navLinks = document.querySelectorAll('.navbar-nav a');


  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      
      if (navbarToggler.classList.contains('collapsed') === false) {
        navbarToggler.click();
      }
    });
  });
});


AOS.init({
  offset: 120, 
  duration: 400,
  easing: 'ease',
  once: false, 
});




