// Hover effect on profile image
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

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.getElementById("skills");
  const progressBars = document.querySelectorAll(".progress-bar");

  // Set initial width to 0% for all progress bars
  progressBars.forEach(bar => {
    bar.style.width = "0%";
    bar.style.transition = "width 1.5s cubic-bezier(0.25, 0.8, 0.25, 1)"; // Smooth cubic-bezier transition
  });

  function showSkills() {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.2; // Trigger animation when section is near the top

    // When the skills section is in view, animate the progress bars
    if (sectionPos < screenPos) {
      progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-width") + "%";
        bar.style.width = targetWidth;
      });
    }
  }

  // Check on page load and whenever the user scrolls
  window.addEventListener("scroll", showSkills);
  showSkills(); // Call it once to check if the section is already in view
});



// Smooth scroll for navigation links
document.querySelectorAll('.navbar-nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Find the target section

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Align to the top of the section
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // หาปุ่มที่เป็น navbar-toggler
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  // หาลิงค์ในเมนู
  const navLinks = document.querySelectorAll('.navbar-nav a');

  // เมื่อคลิกที่ลิงค์ใน nav-item
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // ถ้ามีการเปิดเมนูให้ปิด
      if (navbarToggler.classList.contains('collapsed') === false) {
        navbarToggler.click();
      }
    });
  });
});


