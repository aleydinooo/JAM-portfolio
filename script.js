// Smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu after click
        const nav = document.querySelector('nav ul');
        if(nav.classList.contains('active')){
            nav.classList.remove('active');
        }
    });
});

// Animate skill bars on scroll
const skills = document.querySelectorAll('.bar span');
const skillSection = document.getElementById('skills');

function showSkills() {
    const scrollPos = window.scrollY + window.innerHeight;
    if (scrollPos > skillSection.offsetTop + 100) {
        skills.forEach(skill => {
            skill.style.width = skill.getAttribute('data-width');
        });
    }
}

window.addEventListener('scroll', showSkills);

// Fade-in elements on scroll
const faders = document.querySelectorAll('.fade-in');

function fadeIn() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeIn);
fadeIn(); // initial check

// Dark/light theme toggle
const toggle = document.querySelector('.theme-toggle');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Mobile menu toggle
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
document.querySelector('nav').appendChild(navToggle);

navToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});
