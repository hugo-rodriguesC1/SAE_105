function montrerLegende(classe) {
    let legend = document.querySelector('.'+classe);
    legend.style.display = 'block';
    return anime({
        targets: legend,
        translateY: '2rem',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play
}

function cacherLegende() {
    let legend = document.querySelectorAll('.text__legend');
    return anime({
        targets: legend,
        translateY: '-2rem',
        autoplay: false,
        easing: 'linear',
        duration: 200,
    }).play    
}

function disparaitre() {
    let legend = document.querySelectorAll('.text__legend');
    legend.forEach(function(leg,i) {
        leg.style.display = 'none';
    });
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