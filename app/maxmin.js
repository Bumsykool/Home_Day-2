module.exports = {

	findMinMax : function (myarray) {

		var min= myarray[0];
		var max= myarray[0];
		var result =[];
		for (var i = [0]; i < myarray.length; i++) {
			if(max < myarray[i]){
				max = myarray[i];
			} 

			else if (min > myarray[i]){
				
				min = myarray[i];
			}
			
		}
			if (min === max){
				result.push(min);
			}
			else {
				result.push(min);
				result.push(max);
			}

			return result;

	}







}