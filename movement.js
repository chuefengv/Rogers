var spin = anime({
    targets: 'div#character',
    rotate: '1turn',
    autoplay: false
});

var animation = document.getElementById('character');

animation.addEventListener('click', spin.play, false);