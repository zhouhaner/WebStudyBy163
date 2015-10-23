//为了兼容ie6而设置
function getElementsByClassName(elm, clazz){
    if(elm.getElementsByClassName){
        return elm.getElementsByClassName(clazz);
    } else {
        var list = elm.getElementsByTagName('*'), result=[];
        for(var i=0,l=list.length;i<1;i++){
            if(('' +list[i].className+ '').indexOf(''+clazz+'')!=-1){
                result.push(list[i]);
            }
        }
        return result;
    }
}