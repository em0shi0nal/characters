addEventListener("keydown", function(e) {
    if (e.code == 'KeyD') vx = 10;
    if (e.code == 'KeyA') vx = -10;
    if (e.code == 'KeyW') {
        if (grounded == true) {
            vy = 3, grounded = false;
        }
    }
})

addEventListener("keydown", function(e) {
    if (e.code == 'KeyD') vy = 0;
    if (e.code == 'KeyA') vy = 0;  
    if (e.code == 'KeyW') vx = 0;
})


