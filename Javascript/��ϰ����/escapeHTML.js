function escapseHTML(htmlStr) {
    var length = htmlStr.length;
    var word = "";
    for(i = 0; i < length; i++){
        word += htmlStr.charCodeAt(i).toString();
    }
    return word;
}