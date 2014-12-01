// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
	var result = [];
    var test = function(element) {
        var testList = element.childNodes;
		
		if(element.classList === undefined){ 
			return;
		}
		
        for (var i = 0; i < element.classList.length; i++) {
            if (element.classList[i] === className) {
                result.push(element);
            }
        }
		
		for (var i = 0; i < testList.length; i++){
			test(testList[i]);
		}
    }
    test(document.body);
    return result;  
};
