window.addEventListener('load', init, false);

function init() {
    console.log('init');
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.style.background = AppColors().mybackground;
    var context = canvas.getContext('2d');

    var ball = Ball(Vector(50, 75), 30, AppColors().myred, context);
    var circle = Circle(Vector(120, 75), 25, true, AppColors().myred, true, AppColors().mylightblue, 10, context);
    var ellipse = Ellipse(Vector(195, 75), 30, 20, 0, true, AppColors().mycreme, true, AppColors().myred, 10, context);
    var triangle = Triangle(Vector(260, 75), 50, AppColors().mylightblue, context);
    var box = Box(Vector(300, 50), 50, AppColors().myred, context);
    var rectangle = Rectangle(Vector(370, 55), 60, 40, true, AppColors().myred, true, AppColors().mylightblue, 10, context);
    var line = Line(450, 60, 490, 90, 10, 'round', AppColors().myred, context);
    addInstrucctions();
}

function addInstrucctions() {
    var div = document.createElement('div');
    document.body.appendChild(div);

    var h1 = document.createElement('h1');
    h1.innerHTML = 'Instructions'
    div.appendChild(h1);

    var p = document.createElement('p');
    p.innerHTML = 'The fisrt thing you will need to do is include the <i><b>vector.js</b></i> and <i><b>shape.js</b></i> into your project. All shapes are fully documented. Every shape has an <b>update()</b> and <b>render()</b> method that you can use the <b>update()</b> to set all the properties on each frame and the <b>render()</b> will take care of drawing the shape with those new values.';
    div.appendChild(p);

    p = document.createElement('p');
    p.innerHTML = 'You can also check the <i><b>app.js</b></i> for a quick view on how those shape on top are coded.';
    div.appendChild(p);

    var h4 = document.createElement('h4');
    h4.innerHTML = 'Creating a ball'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var ball = <b>Ball</b>(position:<b>Vector</b>, radius:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating a circle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var< circle = <b>Circle</b>(position:<b>Vector</b>, radius:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an ellipse'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var ellipse = <b>Ellipse</b>(position:<b>Vector</b>, radiusX:<b>number</b>, radiusY:<b>number</b>, rotation:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an triangle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var triangle = <b>Triangle</b>(position:<b>Vector</b>, size:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an box'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var box = <b>Box</b>(position:<b>Vector</b>, size:<b>number</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an rectangle'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var rectangle = <b>Rectangle</b>(position:<b>Vector</b>, width:<b>number</b>, height:<b>number</b>, hasFill:<b>boolean</b>, fillColor:<b>string</b>, hasStroke:<b>boolean</b>, strokeColor:<b>string</b>, lineWidth:<b>number</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'Creating an line'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'var line = <b>Line</b>(x1:<b>number</b>, y1:<b>number</b>, x2:<b>number</b>, y2:<b>number</b>, lineWidth:<b>number</b>, lineCap::<b>string</b>, color:<b>string</b>, context:<b>CanvasRenderingContext2D</b>);';
    p.className = 'code';
    div.appendChild(p);

    h4 = document.createElement('h4');
    h4.innerHTML = 'More shapes are comming...'
    div.appendChild(h4);

    p = document.createElement('p');
    p.innerHTML = 'Star, heart, flower and curves.';
    div.appendChild(p);
}