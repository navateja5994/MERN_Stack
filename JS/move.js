let x = 100;
let y = 100;

const container = document.querySelector(".container");
const output = document.getElementById("output");

function moveleft() {
    x -= 20;
    container.style.left = x + "px";
}

function moveright() {
    x += 20;
    container.style.left = x + "px";
}

function moveup() {
    y -= 20;
    container.style.top = y + "px";
}

function movedown() {
    y += 20;
    container.style.top = y + "px";
}

document.addEventListener("keydown", (event) => {
    output.innerHTML = "Key Down : " + event.key;

    if (event.key === "ArrowLeft") {
        moveleft();
    } else if (event.key === "ArrowRight") {
        moveright();
    } else if (event.key === "ArrowUp") {
        moveup();
    } else if (event.key === "ArrowDown") {
        movedown();
    }
});

document.addEventListener("keyup", (event) => {
    output.innerHTML = "Key Up : " + event.key;
});

document.addEventListener("keypress", (event) => {
    output.innerHTML = "Key Press : " + event.key;
});

document.addEventListener("click", () => {
    output.innerHTML = "Mouse Click";
});

document.addEventListener("dblclick", () => {
    output.innerHTML = "Mouse Double Click";
});

document.addEventListener("mousemove", (event) => {
    output.innerHTML = "Mouse Move : " + event.clientX + ", " + event.clientY;
});

document.addEventListener("mousedown", () => {
    output.innerHTML = "Mouse Down";
});

document.addEventListener("mouseup", () => {
    output.innerHTML = "Mouse Up";
});

document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    output.innerHTML = "Right Click";
});

document.addEventListener("wheel", () => {
    output.innerHTML = "Mouse Wheel";
});

window.addEventListener("resize", () => {
    output.innerHTML = "Window Resized";
});

window.addEventListener("load", () => {
    output.innerHTML = "Page Loaded";
});