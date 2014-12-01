// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
  var result = '';
	if( obj === null ) {
		return 'null';
	} else if ( obj === undefined ) {
		return undefined;
	} else if( obj === true || obj === false || typeof(obj) === 'number' ){
		return obj.toString();
	} else if( typeof(obj) === 'string' ) {
		return '"' + obj + '"';
	} else if( Array.isArray(obj) ) {
		result = [];
		for(var i = 0; i < obj.length; i++) {
			result.push(stringifyJSON(obj[i]));
		}
		return '[' + result + ']';
	} else if( typeof obj === 'object' ) {
		for( var key in obj ) {
			if( stringifyJSON(obj[key]) !== undefined || null ) {
				result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
		return '{' + result.slice(0, result.length - 1) + '}';
	}
};