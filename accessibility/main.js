// 无障碍访问页面专属脚本
document.addEventListener('DOMContentLoaded', () => {
    // 键盘导航支持
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = 0;

    navLinks.forEach((link, index) => {
        link.addEventListener('focus', () => {
            currentIndex = index;
        });
    });

    });