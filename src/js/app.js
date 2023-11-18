document.addEventListener("DOMContentLoaded", function() {
    // Set the initial active link and section
    const initialActiveLink = document.querySelector('nav a');
    initialActiveLink.classList.add('active');
  
    const initialActiveSectionId = initialActiveLink.getAttribute('href').substring(1);
    const initialActiveSection = document.getElementById(initialActiveSectionId);
    initialActiveSection.classList.add('active');
  
    // Add click event listener to each navigation link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        // Remove the 'active' class from all links and sections
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
  
        document.querySelectorAll('section').forEach(function(section) {
          section.classList.remove('active');
        });
  
        // Add the 'active' class to the clicked link and its corresponding section
        link.classList.add('active');
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active');
  
        // Scroll to the target section
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  