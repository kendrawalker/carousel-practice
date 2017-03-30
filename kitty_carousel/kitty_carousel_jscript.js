// kitty carousel
(function() {

    var cat = document.getElementsByClassName('cat');
    var dot = document.getElementsByClassName('dot');
    var current = 0;
    var next = 1;
    var isTransitioning = false;
    var timer;

    function moveCats () {
        cat[current].classList.remove('onscreen');
        cat[current].classList.add('left-exit');
        cat[next].classList.add('onscreen');

        dot[current].classList.remove('active');
        isTransitioning = true;
        current = next;
        next = current+1;
        if(next > 3) {
            next = 0;
        }
        dot[current].classList.add('active');
    }

    document.getElementById('cat-pics').addEventListener('transitionend', function(e){
        if(e.target.classList.contains('left-exit')) {
            e.target.classList.remove('left-exit');
            timer= setTimeout(moveCats, 3500);
        }
        isTransitioning = false;
    });
    timer= setTimeout(moveCats, 3500);

    for (var i=0, l=dot.length; i<l; i++) {
        dot[i].addEventListener('click', function(e) {
            if(isTransitioning) {
                return;
            }
            else if (e.target.classList.contains('current')){
                return;
            }
            else {
                clearTimeout(timer);
                next= +e.target.id.replace("dot","");
                moveCats();
            }
        });
    }
})();
