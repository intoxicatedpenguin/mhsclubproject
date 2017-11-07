var player;
var keyspressed = {
    'x':0,
    'y':0
};
var blocks = [];
var circles = [];

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    player = new Player(50,50);
}

function draw(){
    clear();
    player.show();
    rect(player.x,player.y,5,5);
    blocks.forEach(function(block){
        if(player.collide(block)){
            console.log('rect & circle');
        }
        /*blocks.forEach(function (newBlock) {
            if (block.collide(newBlock)) {
                console.log('rect & rect');
            }
        });*/
        block.show();
    });
    circles.forEach(function (circleChecked) {
        if (player.collide(circleChecked)) {
            console.log('circle & circle');
        }
        circleChecked.show();
    });
    player.move(keyspressed['x'],keyspressed['y']);
}

function keyPressed(){
    if(key == 'W') keyspressed['y'] += -5;
    if(key == 'S') keyspressed['y'] += 5;
    if(key == 'A') keyspressed['x'] += -5;
    if(key == 'D') keyspressed['x'] += 5;
}

function keyReleased(){
    if(key == 'W') keyspressed['y'] += 5;
    if(key == 'S') keyspressed['y'] += -5;
    if(key == 'A') keyspressed['x'] += 5;
    if(key == 'D') keyspressed['x'] += -5;
}

function mouseClicked(){
    blocks.push(new Block(mouseX,mouseY,20,20));
}

function mouseWheel() {
    circles.push(new Player(mouseX, mouseY, 0));
}