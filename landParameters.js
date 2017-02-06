//https://www.codewars.com/kata/5839c48f0cf94640a20001d3
function landPerimeter(arr) {
  //console.log(arr);
  //perimeter depends on neighbours: L,R,T,B
  //for border cases, L,R,T,B can be undefined 
  //if i == 0 => top undefined; if j == 0 Left undefined
  //if i == lastRow, bottom; if j == rightMost, Right undefined
  //Corners have 2 conditions.
  var perimeter=0, rows=arr.length, cols = arr[0].length;
  for (var i=0;i<rows;i++) {
    for (var j=0;j<cols;j++){
      if (arr[i][j] === "X") {perimeter += checkBorder(i,j)}
    }
  }
  return 'Total land perimeter: '+ perimeter;
  function checkBorder(i,j) {
    var l,r,t,b;
    //checkTop
    if (i==0) {t=1;}
    else t = checkNeighbour(i-1,j);
    //checkBottom
    if (i==rows-1) {b=1}
    else b = checkNeighbour(i+1,j);
    //checkLeft
    if (j==0) {l=1;}
    else l = checkNeighbour(i,j-1);
    //checkRight
    if (j==cols-1) {r=1;}
    else r = checkNeighbour(i,j+1);
    return l+t+r+b;
  }
  function checkNeighbour(i,j) {
    if (arr[i][j] === "X") return 0;
    else return 1;
  }
}
