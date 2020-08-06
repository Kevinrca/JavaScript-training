const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})


let painting = false;


function startPosition(e) {
    painting = true;ctx.lineWidth = 10;
    
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();

}


function endPosition() {
    painting = false;
    ctx.beginPath();
}


function draw(e) {
    if(!painting) {
        return
    }

    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);