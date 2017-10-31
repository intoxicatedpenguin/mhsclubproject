function Player(x,y,health){

    this.x = x;
    this.y = y;
    
    this.move = function(xvel,yvel){
        this.x += xvel;
        this.y += yvel;
    }

    this.show = function(){
        ellipse(this.x,this.y,50,50);
    }
}