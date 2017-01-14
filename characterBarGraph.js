/*https://www.codewars.com/kata/5826773bfad36332bf0002f9*/
function countCharsBarGraph(text, maxw) {
  text = text.toLowerCase();
  text = text.split("").filter(function(ele){
    if ("abcdefghijklmnopqrstuvwxyz".indexOf(ele)>-1)
      return true;
    return false;
  }).join("");
  /*Object of unique alphabets*/
  var txtDict=text.split("").reduce(function(dict,ele){
    if (dict.hasOwnProperty(ele)) 
      dict[ele]+=1;
    else dict[ele]=1;
    return dict;
  },{});
  
  /*SOrting object by values*/
  /*First converting to array of [key,value] pair*/
  var sortable=[];
  for (key in txtDict) {
    sortable.push([key,txtDict[key]]);
  }
  
  /*sortable = sortable.sort();
  console.log(sortable);*/
  /*Above line so that get sorted by keys as well*/
  /*Need to change sorted so that it's sorted by value and 
  then by keys as well*/
  /*var sorted = sortable.sort(function(a,b){return b[1]-a[1]});*/
  /*does not work because keys get mixed*/
  /*We need a double sort*/
  var sorted = sortable.sort(function(a,b){
    if (a[1]===b[1]) {
      /*console.log("compare by key");*/
      return (a[0]<b[0]) ? -1:1;
    }
    else {
      /*console.log("compare by value");*/
      return a[1]>b[1] ? -1 : 1;
    }
  });
  /*console.log(maxw,sorted);*/
  
  var maxEle = sorted[0][1];
  var scaled;
   /*scaling*/
  var scaled = sorted.map(function(ele){
    var scaled = Math.floor(maxw/maxEle*ele[1]);
    return [ele[0],scaled]
  });
  scaled[0][1] = maxw;//discovered this error only through a testcase
  console.log(scaled);
  
  var converted= scaled.reduce(function(prev,curr){
    return prev+curr[0]+":".concat(Array(curr[1]+1).join("#")).concat("\n");
  },"");
  
  return converted.trim();
}