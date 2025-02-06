// Hover effect on profile image
const profileImg = document.querySelector('.profile-img');

profileImg.addEventListener('mouseenter', () => {
  profileImg.style.transform = 'scale(1.1)';
  profileImg.style.transition = 'transform 0.3s ease';
  profileImg.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

profileImg.addEventListener('mouseleave', () => {
  profileImg.style.transform = 'scale(1)';
  profileImg.style.boxShadow = 'none';
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