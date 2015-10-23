function multiply(){
    var length = arguments.length;
    var mul = 1;
    var parameter;
    for(var i = 0; i < length; i++){
        parameter=arguments[i];
        mul = mul*parameter; 
    }
    return mul;      
}