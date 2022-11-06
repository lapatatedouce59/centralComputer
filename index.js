var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.style.width = window.innerWidth + "px";
    // artifical delay so innerHeight is correct
    setTimeout(function() {
    canvas.style.height = window.innerHeight + "px";
    }, 0);
};
window.onresize = resizeCanvas;

resizeCanvas();

