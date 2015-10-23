function parseQuery(query) {
    query = '{"' + 
                 query
                    .replace(/&/g, '","')
                    .replace(/=/g, '":"')+
             '"}';
    return JSON.parse(query,function(key, value){ 

        var ret;

        if(key===""){ 
            ret = value;
        }
        else{
            ret = decodeURIComponent(value); 
        }
        return ret;});
}