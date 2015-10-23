function Dad(a,b){
    this.a = a;
    this.b = b;
    this.hello = function(){
        console.log(this.a);
    };
}

function Son() {
    Dad.apply(this,arguments);
}

Son.prototype = new Dad();
Son.prototype.constructor = Son;
Son.prototype.hello = function() {
    Dad.prototype.hello.apply(this,arguments);
}

var ason = new Son("hello world", 22);