window.addEventListener('load', init, false);
function init() {

    window.addEventListener('mousemove', onMousemove, false);

    let width = window.innerWidth,
        height = window.innerHeight,
        canvas = createCanvas(0, 0, width, height),
        context = canvas.getContext('2d'),
        ball1 = Ball(Vector(300, 300), 50, 'red', context),
        ball2 = Ball(Vector(100, 100), 20, 'blue', context),
        mp = Vector();

    ball1.debug = true;
    ball2.debug = true;

    function update() {
        context.clearRect(0, 0, width, height);

        /*
        if (containsPoint(mp.x, mp.y, ball1.getBounds())) {
            ball1.color = 'yellow';
        } else {
            ball1.color = 'red';
        }

        if (containsPoint(mp.x, mp.y, ball2.getBounds())) {
            ball2.color = 'yellow';
        } else {
            ball2.color = 'red';
        }

        ball1.update();
        ball2.update();
        */


        if (hitBallOnBall(ball1.position, ball1.radius, ball2.position, ball2.radius)) {
            ball1.color = 'yellow';
        } else {
            ball1.color = 'red';
        }
        ball1.position = mp;
        ball1.update();
        ball2.update();


        requestAnimationFrame(update);
    }
    update();

    function onMousemove(e) {
        mp.x = e.clientX;
        mp.y = e.clientY;
    }

}