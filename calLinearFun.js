/*https://www.codewars.com/kata/54784a99b5339e1eaf000807*/
function getFunction(sequence) {
  //calculate m and n asuming f(n) is linear
  var linear = true;
  var m = sequence[0];
  var n = sequence[1]-m;
  //verify
  for (var i=2;i<sequence.length;i++) {
    if (sequence[i]!==i*n+m) {linear = false;break;}
  }
  function fun(x) {
    var result = n*x+m;
    return result;
  }
  return (linear) ? fun : 'Non-linear sequence';
}
/*Also an example of closure because fun can use 
variables of getFunction even after getFunction is returned.
That's possible because of closure
*/
