module.exports = {

words: function (str){


	    var words = str.split(" ");
        var count = {};
        for (var i = 0, len = words.length; i < len; i++) {
            if (count.hasOwnProperty(words[i])) {
                count[words[i]] = parseInt(count[words[i]], 10) + 1;
            }
            else {
                count[words[i]] = 1;
            }
        }
        return count;
    }





}












