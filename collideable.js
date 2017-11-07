function Collideable(x, y, w, h, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shape = shape;

    this.distance = function(otherElement) {
        var dx = this.x - otherElement.x;
        var dy = this.y - otherElement.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        return distance;
    }

    this.collide = function (otherElement) {
        if (otherElement.shape == "rect" && this.shape == "ellipse") { // this is a circle
            var distance = this.distance(otherElement);
            if (distance < this.w) { // collision
                return true;
            }
            return false;
        } else if (otherElement.shape == "ellipse" && this.shape == "rect") { // this is a block
            var distance = this.distance(otherElement);
            if (distance < otherElement.w) { // collision
                return true;
            }
            return false;
        } else if (otherElement.shape == "rect" && this.shape == "rect") {
            if (this.x < otherElement.x + otherElement.width &&
                this.x + this.width > otherElement.x &&
                this.y < otherElement.y + otherElement.height &&
                this.height + this.y > otherElement.y) {
                 // collision detected!
                 return true;
             }
             return false;
        } else if (otherElement.shape == "ellipse" && this.shape == "ellipse") {
            var distance = this.distance(otherElement);
            
            if (distance < this.w + otherElement.w) {
                return true;// collision detected!
            }
            return false;
        }
    }
    this.show = function() {
        if (shape == "ellipse") {
            ellipse(this.x, this.y, this.w, this.h);
        } else if (shape == "rect") {
            rect(this.x, this.y, this.w, this.h);
        }
    }
}