// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Collapsible Sections
const collapsibleSections = document.querySelectorAll('.container h2');
collapsibleSections.forEach(section => {
    section.addEventListener('click', function() {
        const nextElement = this.nextElementSibling;
        if (nextElement.style.display === "none" || !nextElement.style.display) {
            nextElement.style.display = "block";
        } else {
            nextElement.style.display = "none";
        }
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = "↑ Top";
scrollToTopBtn.id = 'scrollToTopBtn';
document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Dark Mode Toggle
const toggleDarkMode = document.createElement('button');
toggleDarkMode.textContent = "🌙 Dark Mode";
toggleDarkMode.id = 'darkModeToggle';
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleDarkMode.textContent = "☀️ Light Mode";
    } else {
        toggleDarkMode.textContent = "🌙 Dark Mode";
    }
});
