function showContent(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// Show the About Me section by default
document.addEventListener('DOMContentLoaded', () => {
    showContent('about');
});
