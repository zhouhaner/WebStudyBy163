function copy(obj){
    var obj2 = new Object();
    for(var i in obj){
        obj2[i] = obj[i];
    };
    return obj2;
}