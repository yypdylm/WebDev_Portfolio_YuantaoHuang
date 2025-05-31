// Design-Thinking 页面专属脚本
document.addEventListener('DOMContentLoaded', () => {
    // 技术图标点击旋转效果
    const techItems = document.querySelectorAll('.tech-item');
    techItems.forEach(item => {
        item.addEventListener('click', () => {
            const logo = item.querySelector('.rounded-logo');
            if (logo) {
                logo.style.transform = 'rotate(360deg)';
                setTimeout(() => {
                    logo.style.transform = 'rotate(0deg)';
                }, 1000);
            }
        });
    });

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});