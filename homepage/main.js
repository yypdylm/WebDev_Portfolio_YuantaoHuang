document.addEventListener('DOMContentLoaded', () => {
    // 导航栏滚动效果
    const nav = document.querySelector('.fixed-nav');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScrollY = window.scrollY;
    });
    
    // 键盘导航支持
    const navLinks = document.querySelectorAll('.nav-link');
    let currentIndex = -1;
    
    navLinks.forEach((link, index) => {
        link.addEventListener('focus', () => {
            currentIndex = index;
        });
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % navLinks.length;
            navLinks[currentIndex].focus();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
            navLinks[currentIndex].focus();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.getElementById('profileImg');
    const bgMusic = document.getElementById('bgMusic');

    // 头像点击控制音乐
    profileImg.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => {
                console.error('自动播放失败:', e);
                alert('请先与页面交互后再播放音乐');
            });
        } else {
            bgMusic.pause();
        }
    });

    // 处理浏览器自动播放限制
    document.body.addEventListener('click', function handleFirstInteraction() {
        bgMusic.play().catch(() => {}); // 尝试播放，失败则忽略
        document.body.removeEventListener('click', handleFirstInteraction);
    }, { once: true });
});