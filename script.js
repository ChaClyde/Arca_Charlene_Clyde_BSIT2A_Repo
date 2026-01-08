/* =========================
   TAB FUNCTION (Resume + Portfolio)
========================= */
function setupTabs(tabSelector, contentSelector) {
    const tabs = document.querySelectorAll(tabSelector);
    const buttons = document.querySelectorAll(`${tabSelector} .tab-btn`);
    const contents = document.querySelectorAll(contentSelector);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.dataset.tab;

            // Remove active from tabs
            tabs.forEach(tab => tab.classList.remove('active'));
            button.closest(tabSelector).classList.add('active');

            // Remove active from content
            contents.forEach(c => c.classList.remove('active'));

            // Activate target content
            const activeContent = document.querySelector(
                `${contentSelector}.${target}`
            );
            if (activeContent) activeContent.classList.add('active');
        });
    });
}

// Init tabs
setupTabs('.resume-details', '.tab-grid.resume-box');
setupTabs('.portfolio-tab', '.tab-grid.portfolio-box');


/* =========================
   NAVBAR ACTIVE LINK + SCROLL
========================= */
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('.section');

// Click highlight
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Scroll highlight
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
