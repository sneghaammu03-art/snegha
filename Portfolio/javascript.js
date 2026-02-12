window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill');
    const triggerBottom = window.innerHeight / 5 * 4;

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        if(skillTop < triggerBottom) {
            skill.classList.add('show');
        } else {
            skill.classList.remove('show');
        }
    });
});