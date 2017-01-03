//Reverse Vowels In A String
/*https://www.codewars.com/kata/reverse-vowels-in-a-string/train/javascript*/
function reverseVowels(str) {
  var vowels = str.split("").filter(isVowel);
  console.log(vowels);
  vowels = vowels.reverse();
  var newStr = "",c=0;
  for (var i=0;i<str.length;i++){
    if(isVowel(str[i]))
      {newStr = newStr + vowels[c];c++}
    else newStr = newStr + str[i];
  }
  function isVowel(ele){
    ele = ele.toLowerCase();
    if (ele === "a" || ele === "e" ||ele === "i" ||ele === "o" ||ele === "u")
    return true;
  }
  return newStr;
}