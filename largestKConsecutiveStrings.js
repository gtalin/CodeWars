/*https://www.codewars.com/kata/consecutive-strings/train/javascript*/
function longestConsec(strarr, k) {
    // your code
    var largestk = "";
    var largestLen = 0;
    var sumnString = {};
    for (var i=0;i<strarr.length-(k-1);i++) {
      sumnString = kSum(i,k);
      if (sumnString[0]>largestLen) {
        largestLen = sumnString[0];
        largestk = sumnString[1];
      }
    }
    function kSum(ix,k) {
      var sum=0, str="";
      for (var i=0;i<k;i++) {
        sum +=strarr[ix+i].length;
        str+=strarr[ix+i];
      }
      return {0:sum,1:str};
    }
    
    return largestk;
}