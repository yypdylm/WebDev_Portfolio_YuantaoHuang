document.addEventListener('DOMContentLoaded', () => {
    // 技能展示按钮交互
    const skillBtn = document.getElementById('showSkillBtn');
    const skillWord = document.getElementById('skillWord');
    const skills = ['HTML5', 'CSS3', 'JavaScript',':)'];
    let currentSkillIndex = 0;

    if (skillBtn && skillWord) {
        skillBtn.addEventListener('click', () => {
            if (currentSkillIndex < skills.length) {
                skillWord.textContent = skills[currentSkillIndex];
                currentSkillIndex++;
            }
            if (currentSkillIndex === skills.length) {
                skillBtn.textContent = "Enjoy your day!";
            }
        });
    }
});