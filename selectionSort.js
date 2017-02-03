"use strict";
function selectionSort(a) {
	var largestIx = 0, inPlace = 1;
	for (var i=a.length-inPlace;i>0;i--){
		largestIx = i;
		for (var j=0; j<a.length-inPlace;j++) {
			if (a[largestIx]<a[j]) {
				largestIx = j;
			}
		}
		swap(a.length-inPlace,largestIx,a);
		inPlace +=1;
	}
}

function swap(i,j,a) {
	/*a=a+b;
	b=a-b;
	a=a-b;*/
	if (i!==j) {
	//with tmp variable method, wouldn't have to make check
		a[i] = a[i] + a[j];
		a[j] = a[i] - a[j];
		a[i] = a[i] - a[j];
		}
}

//var a=[6,5,3,1,8,7,2,4];
var a = [54,26,93,17,77,31,44,55,20];
console.log(a);
selectionSort(a);
console.log(a);
