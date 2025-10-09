// add class navbarDark on navbar scroll
const ball = document.querySelector('.ball');
const ninjastar = document.querySelector('.ninjastar');
const square = document.querySelector('.square');


ball.onmousedown = function(event) {
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;

    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ball.style.left = pageX - shiftX + 'px';
        ball.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);

    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ball.onmouseup = null;
    };
};

ball.ondragstart = function() {
  return false;
};

ninjastar.onmousedown = function(event) {
    let shiftX = event.clientX - ninjastar.getBoundingClientRect().left;
    let shiftY = event.clientY - ninjastar.getBoundingClientRect().top;

    ninjastar.style.position = 'absolute';
    ninjastar.style.zIndex = 1000;
    document.body.append(ninjastar);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        ninjastar.style.left = pageX - shiftX + 'px';
        ninjastar.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);

    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
    ninjastar.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        ninjastar.onmouseup = null;
    };
};

ninjastar.ondragstart = function() {
  return false;
};


square.onmousedown = function(event) {
    let shiftX = event.clientX - square.getBoundingClientRect().left;
    let shiftY = event.clientY - square.getBoundingClientRect().top;

    square.style.position = 'absolute';
    square.style.zIndex = 1000;
    document.body.append(square);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        square.style.left = pageX - shiftX + 'px';
        square.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    // mousemove로 공을 움직입니다.
    document.addEventListener('mousemove', onMouseMove);

    // 공을 드롭하고, 불필요한 핸들러를 제거합니다.
   square.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        square.onmouseup = null;
    };
};

square.ondragstart = function() {
  return false;
};

