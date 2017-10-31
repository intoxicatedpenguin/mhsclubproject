var player;
var keyspressed = {
    'x':0,
    'y':0
};
var blocks = [];

function setup(){
    createCanvas(window.innerWidth,window.innerHeight);
    player = new Player(50,50);
}

function draw(){
    clear();
    player.show();
    rect(player.x,player.y,5,5);
    blocks.forEach(function(block){
        if(player.x==(block.x+5)||player.x==(block.x-5)){
            console.log('ayylmao');
            player.move(-5,0);
        }
        console.log(player.x-block.x);
        block.show();
    })
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