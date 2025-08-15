// 添加載入動畫
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// 點擊效果
document.querySelectorAll('.article-card, .nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        // 添加點擊動畫
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});
