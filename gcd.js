function gcdRec(dividend, divisor) {
	var tmp, remainder;
	if (dividend<divisor) {
		tmp = dividend;
		dividend = divisor;
		divisor = tmp;
	}
	remainder = dividend%divisor;
	
	if (remainder>0) {
		return gcdRec(divisor,remainder);
		
		//divisor becomes dividend and remainder bec divisor
	}
	else return divisor;
	//return;
}

function gcdIt(dividend, divisor) {
	var tmp, remainder;
	if (dividend<divisor) {
		tmp = dividend;
		dividend = divisor;
		divisor = tmp;
	}
	remainder = dividend%divisor;
	while (remainder) {
		dividend = divisor;
		divisor = remainder;
		remainder = dividend%divisor;
	}
	return divisor;
	
}

var gcR, gcI;
//gcR = gcdRec(32,16);
//gcI = gcdRec(32,16);
//gcR = gcdRec(142341,512345);
gcR = gcdRec(65535,4294967295);
//even though large numbers, probably it was fast because
//no calculation in intermediate steps. Just return 
console.log(gcR,gcI);

