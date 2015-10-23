if(!window.JSON){
    window.JSON = {
        parse: function(sJson){
            return eval("(" + sJSON + ")");
        },
        stringify: function(obj){
            var result = "";
            for(var key in obj){
                if(typeof obj[key] == "string"){
                    // 如果属性值是String类型，属性值需要加上双引号
                    result += "\"" + key + "\":\"" + obj[key] + "\",";
                }else if(obj[key] instanceof RegExp){
                    // 如果属性是正则表达式，属性值只保留一对空大括号{}
                    result += "\"" + key + "\":{},";
                }else if(typeof obj[key] == "undefined" || obj[key] instanceof Function){
                    // 如果属性值是undefined, 该属性被忽略。忽略方法。
                }else if(obj[key] instanceof Array){
                    // 如果属性值是数组
                    result += "\"" + key + "\":[";
                    var arr = obj[key];
                    for(var item in arr){
                        if(typeof arr[item] == "string"){
                            // 如果数组项是String类型，需要加上双引号
                            result += "\"" + arr[item] + "\",";
                        }else if(arr[item] instanceof RegExp){
                            // 如果属数组项是正则表达式，只保留一对空大括号{}
                            result += "{},";
                        }else if(typeof arr[item] == "undefined" || arr[item] instanceof Function){
                            // 如果数组项是undefined, 则显示null。如果是函数，则显示null?。
                            result += null +",";
                        }else if(arr[item] instanceof Object){
                            //如果数组项是对象(非正则，非函数，非null)，调用本函数处理
                            result += this.stringify(arr[item]) +",";
                        }else{
                            result += arr[item] + ",";
                        }
                    }
                    result = result.slice(0,-1)+"],"
    
                }else if(obj[key] instanceof Object){
                    // 如果属性值是对象(非null，非函数，非正则)，调用本函数处理
                    result += "\"" + key + "\":" + this.stringify(obj[key]) + ",";
                }else{
                    result += "\"" + key + "\":" + obj[key] + ",";
                }
            }
            // 去除最后一个逗号,两边加{}
            return "{" + result.slice(0,-1) + "}";
        }
    };
}