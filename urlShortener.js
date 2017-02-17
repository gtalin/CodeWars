//Will convert a number to a 36 bits: alphabets and numbers
//normally it is 62 bits because capitalization is also used
//The problem is basically base conversion
//In the big scheme of things, num passed to shortner will be 
//length of length of db collection + 1000
//doing +1000 so that with 1000 to 9999 there is uniformity

function toShort(baseDig,num) {
	//basically the problem is about converting from base 10
	//to base 36
	var base = baseDig.length;
	var shortened = [];
	while(num) {
		shortened.push(baseDig[num%base]);
		num = Math.floor(num/base);
	}
	return shortened.reverse().join("");
}

function expand(baseDig,shortened) {
	shortened = shortened.split("").reverse().join("");
	var base = baseDig.length;
	var num = 0;
	for (var i=0;i<shortened.length;i++) {
		console.log(baseDig.indexOf(shortened[i]));
		num=num+Math.pow(base,i)*baseDig.indexOf(shortened[i]);
	}
	return num;
}

var num = 12345;
var baseDig = "0123456789abcdefghijklmnopqrstuvwxyz"
//var baseDig = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var shortened = toShort(baseDig, num);
console.log(shortened);
console.log(expand(baseDig,shortened));