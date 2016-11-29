module.exports = {

	findMinMax : function (myarray) {

		var min= myarray[0];
		var max= myarray[0];
		for (var i = [0]; i < myarray.length; i++) {
			if(max < myarray[1] && min > myarray[1]){
				max = myarray[1];
				min = myarray[1];
			}
			return [min,max]
		}


	}







}