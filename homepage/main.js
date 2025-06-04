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

    const profileImg = document.getElementById('profileImg');
    const bgMusic = document.getElementById('bgMusic');

    // 头像点击控制音乐
    profileImg.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => {
                console.error('error:', e);
                alert('error');
            });
        } else {
            bgMusic.pause();
        }
    });
});

const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        // 平滑滚动到顶部
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

        const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const originalHref = link.href.split('?')[0]; // 获取原始链接
        const timestamp = new Date().getTime(); // 使用时间戳作为随机参数
        link.href = `${originalHref}?t=${timestamp}`; // 添加时间戳到链接
    });