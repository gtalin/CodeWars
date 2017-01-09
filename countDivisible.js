/*https://www.codewars.com/kata/55a5c82cd8e9baa49000004c*/
function divisibleCount(x, y, k) {
   //code me
   /*return Array.apply(null, new Array(y-x+1)).map(function(_,i) {return i+x;})
   .filter(function(ele){return (ele%k===0)}).length;*/
   var c=0;
   for (var i=x;i<=y;i++) {
     if (i%k === 0) break;
   }
   return Math.floor((y-i)/k)+1;
}