const trends = require('./trendsModule.js');
const async = require('async');
var args = +process.argv.length;
var weeks, print, compare;
var terms = [];
var trendsMap;

function assignTrendValues(){
	if (args < 3){
		weeks = 4;
		print = 1;
		compare = 0;
		terms = ['Bitcoin', 'Ethereum', 'Litecoin'];
	}
	else{
		weeks = +process.argv[2];
		if (args > 3){
			print = +process.argv[3];
			if(args > 4){
				compare = +process.argv[4]
				if (args > 5){
					var index = 0;
					for (var i = 5; i < args; i++){
						terms[index] = process.argv[i];
						index++;
					}
				}
			}
		}
	}
}


async function main(){
	const mymap = await trends.main(weeks, print, terms);
	return mymap;
}
assignTrendValues();
main().then((map) => {
  // code that runs after map has been returned from t rendsModule
});

