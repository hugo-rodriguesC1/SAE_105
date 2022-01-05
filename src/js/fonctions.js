function montrerLegende() {
    let legend = document.querySelector('.text__legend');
    legend.style.display = 'block';
    return anime({
        targets: legend,
        translateY: '2.3625rem',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play
}

function cacherLegende() {
    let legend = document.querySelector('.text__legend');
    return anime({
        targets: legend,
        translateY: '-2.3625rem',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play    
}

function disparaitre() {
    let legend = document.querySelector('.text__legend');
    legend.style.display = 'none'
}

function carousel() {
    let images = document.querySelectorAll('.carousel__img');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,i) {
        img.style.zIndex = images.length - i;
    });

    let anim = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img, indice) {
                if (indice == 0) return delta;
                return 2*delta +d;
        }
    });

    anim.add({
        translateX: [{value: 272, duration: d, easing: 'easeInOutSine'},
                     {value: 272, duration: 0, delay: delta}],
    });
}