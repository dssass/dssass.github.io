/* assets/js/home.js */
// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 導航背景透明度
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.top-nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.08)';
    }
});

// 載入動畫
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
});

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});

// 卡片點擊效果
document.querySelectorAll('.feature-card, .article-card').forEach(card => {
    card.addEventListener('click', function(e) {
        this.style.transform = 'translateY(-10px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});
});
