// Canvas part
const canvas = document.querySelector("#JsCanvas");
const ctx = canvas.getContext("2d");
const CANVAS_SIZE = 600;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = 2.5;

let painting = false;
ctx.strokeStyle = "#2c2c2c";

function startPainting(){painting = true;}
function stopPainting(){painting = false;}
function mouseMove(event){
    let x = event.offsetX;
    let y = event.offsetY;
    if(!painting){
        // console.log("path!!!!")
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // console.log("line!!!!")
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


// Line range part
const range = document.getElementById("JsRange");
if(range){range.addEventListener("input",rangeHandler);};

function rangeHandler(event){
    // console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}


// Button Fill
const btnFill = document.getElementById("JsMode");
if(btnFill){btnFill.addEventListener("click",startFilling);}

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
let filling = false;

function startFilling(){
    if(filling === false){
        // filling = true;
        btnFill.innerHTML = "paint";
    } else {
        // filling = false;
        btnFill.innerHTML = "fill";
    };
    filling = !filling;
}
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE );
    }
}


// Color change part
const colors = document.getElementsByClassName("colors");
Array.from(colors).forEach(color => color.addEventListener("click",colorHandler));

function colorHandler(event){
    // console.log(event.target.style.backgroundColor);
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


// Button Save
const btnSave = document.getElementById("JsSave");
if(btnSave){btnSave.addEventListener("click",saveHandler);}

// Mouse Right Click prevent function
function hadleCM(event){
    event.preventDefault();
}
function saveHandler(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
};



    if(canvas){
        canvas.addEventListener("mousemove", mouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleCanvasClick);
        canvas.addEventListener("contextmenu",hadleCM);
    };