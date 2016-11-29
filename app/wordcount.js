module.exports = {

words: function (str){

      
        var new_words = str.replace(/[\r\n\t]+/g," ");
        var words = new_words.split(" ");
        var count = {};
        for (var i = 0, len = words.length; i < len; i++) {
            if(words[i] === ""){
              count[words[i]] = 1;
            }else if (count.hasOwnProperty(words[i])) {
                count[words[i]] = parseInt(count[words[i]], 10) + 1;
            }
            else {
                count[words[i]] = 1;
            }
        }
        return count;
    }


}












