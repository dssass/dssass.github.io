// 將之前的 JavaScript 代碼放在這裡
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// 滾動視差效果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    const parallax = scrolled * 0.5;
    
    if (header) {
        header.style.transform = `translateY(${parallax}px)`;
    }
});

// 文章卡片點擊效果
document.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (e.target.tagName !== 'A') {
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        }
    });
});

/* ... 其他 JavaScript 功能 ... */
