const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

// ボタンをクリックした時の動き
hamburger.addEventListener('click', function () {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});

// 追加：メニューの中のリンクをクリックした時の動き
const navLinks = document.querySelectorAll('.nav-list a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // メニューとボタンから 'open' クラスを削除して閉じる
        nav.classList.remove('open');
        hamburger.classList.remove('open');
    });
});
