// Add smooth scrolling to internal links
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 60, // Adjust offset if needed
            behavior: 'smooth'
        });
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => link.addEventListener('click', smoothScroll));
    
    
});
