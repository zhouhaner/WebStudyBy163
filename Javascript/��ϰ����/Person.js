function Person(name, age) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.introduce = function(){
    return("I am " + name + "," + "I am " + age + " years old!");
    };
    return o;
}
