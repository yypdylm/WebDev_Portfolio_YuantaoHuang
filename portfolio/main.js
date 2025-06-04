// 作品集页面专属脚本
document.addEventListener('DOMContentLoaded', () => {
    // 视频播放控制
    const videos = document.querySelectorAll('video');
    
    videos.forEach(video => {
        // 鼠标悬停时显示控制栏
        video.addEventListener('mouseenter', () => {
            video.controls = true;
        });
        
        // 鼠标离开时隐藏控制栏（可选）
        video.addEventListener('mouseleave', () => {
            if (!video.paused) {
                video.controls = false;
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