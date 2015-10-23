function Circle(r) {
    this.r = r;
}

Circle.prototype.premeter = function() {
    return Math.round(Math.PI*2*this.r);
}

Circle.prototype.area = function() {
    return Math.round(Math.PI*this.r*this.r);
}

var newCircle = new Circle(10);

newCircle_premeter = newCircle.premeter();

newCircle_area = newCircle.area();