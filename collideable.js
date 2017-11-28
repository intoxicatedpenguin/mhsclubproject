function Collideable(x, y, w, h, shape) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shape = shape;

    this.collide = function (otherElement) {
        if (otherElement.shape == "rect" && this.shape == "ellipse") { // this is a circle
            return collideRectCircle(otherElement.x, otherElement.y, otherElement.w, otherElement.h, this.x, this.y, this.w);
        } else if (otherElement.shape == "ellipse" && this.shape == "rect") { // this is a block
            return collideRectCircle(this.x, this.y, this.w, this.h, otherElement.x, otherElement.y, otherElement.w);
        } else if (otherElement.shape == "rect" && this.shape == "rect") {
            return collideRectRect(this.x, this.y, this.w, this.h, otherElement.x, otherElement.y, otherElement.w, otherElement.h);
        } else if (otherElement.shape == "ellipse" && this.shape == "ellipse") {
            return collideCircleCircle(this.x, this.y, this.w, otherElement.x, otherElement.y, otherElement.w);
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