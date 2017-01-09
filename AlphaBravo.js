/*https://www.codewars.com/kata/586538146b56991861000293*/
function to_nato(words) {
	// Go code
  var stringCode = "Alfa, Bravo, Charlie, Delta, Echo, Foxtrot, Golf, Hotel, India, Juliett, Kilo, Lima, Mike, November, Oscar, Papa, Quebec, Romeo, Sierra, Tango, Uniform, Victor, Whiskey, X-ray, Yankee, Zulu";
  var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var code = stringCode.split(", ");
  console.log(code);
  words = words.replace(/ /g, '');
  return words.split("").map(function(alpha){
    return alphabets.indexOf(alpha.toUpperCase())!==-1 ? code[alphabets.indexOf(alpha.toUpperCase())] : alpha;
  }).join(" ");
  
}