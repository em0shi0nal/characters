const htmlBody = document.querySelector('body');
let x = 0;
let y = 0;
let vx = 0;
let vy = 0;
let grounded = true;

//im too lazy to clean this up if anyones looking at the code lmfao

const GROUND= 0.05 * window.innerWidth;
const STEPSIZE = 10;

let MAX_width = window.innerWidth;
let MAX_height = 0.75 * window.innerHeight;

let image = document.createElement("img");
image.id = "random_image";

let characters = ["joe", "jappy", "wishi"];
const randomIndex = Math.floor(Math.random() * characters.length);
let chosen_character = characters[randomIndex];
let file = "/characters/" + chosen_character + "/idle_right.gif";
let url = chrome.extension.getURL(file);
image.src = url;

let body_FirstChild = document.querySelector('body').firstElementChild;
const container = document.createElement("div");
container.id = "image_container";
container.appendChild(image);

document.body.insertBefore(container, body_FirstChild);


const randomImageFunction = function () {
    let img = document.getElementById('random_image');
    let characters = ["joe", "jappy", "wishi"];
    const randomIndex = Math.floor(Math.random() * characters.length);
    chosen_character = characters[randomIndex];
    let file = "/characters/" + chosen_character + "/idle_right.gif";
    let url = chrome.extension.getURL(file);
    image.src = url;
    console.log('the user clicked and set the image to ' + img.src);
}


image.onclick = randomImageFunction;



function collision () {
    if (y <= 0) {
        y = 0;
        grounded = true;
    }
}

function update() {
    x += vx;
    if (x > MAX_width) {
        x = 0 - STEPSIZE;
    } else if (x < 0) {
        x = MAX_width + STEPSIZE;
    }

    y += vy;
    collision ();

    let numx = "margin-left: " + x.toString() + "px";
    let numy = "margin-top: " + y.toString() + "px";
    container.setAttribute('style', numx + "; " + numy);
    console.log(x);
    console.log(y);
    
}


htmlBody.onkeydown = function(e) {
    if (e.code == 'KeyD') {
        if (image.src.includes("/right.gif") == false) {
            let file = "/characters/" + chosen_character + "/right.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
        }
        update();
    } else if (e.code == 'KeyA') {
        if (image.src.includes("/left.gif") == false) {
            let file = "/characters/" + chosen_character + "/left.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
        }
        update();
    } else if (e.code == 'KeyW') {
        if (image.src.includes("/jump.gif") == false) {
            if (image.src.includes("left.gif")) {
            let file = "/characters/" + chosen_character + "/jump_left.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
            } else if (image.src.includes("right.gif")) { 
            let file = "/characters/" + chosen_character + "/jump_right.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
            }
        }
        update();
    }

}

setTimeout(() => {   
    htmlBody.onkeyup = function(e) {
        if (image.src.includes('/left.gif') == true) {
            let file = "/characters/" + chosen_character + "/idle_left.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
            console.log("should be idle");
            update();
        }

        if (image.src.includes('/right.gif') == true) {
            let file = "/characters/" + chosen_character + "/idle_right.gif";
            let url = chrome.extension.getURL(file);
            image.src = url;
            update();
            console.log("should be idle");
        }
    }
}, 20);


setInterval(function Gravity() {
    console.log(vy);
    if (grounded == false){
        vy -= 0.05;
        update();
    }
})








    




