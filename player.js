function Player(x,y,health){
    Collideable.call(this, x, y, 50, 50, "ellipse");
    this.health = health;
    
    this.move = function(xvel,yvel){
        this.x += xvel;
        this.y += yvel;
    }

    /*this.show = function(){
        ellipse(this.x,this.y,this.w,this.h);
    }*/
}