/*https://www.codewars.com/kata/586305e8916e244b66001a93*/
const mirror = obj => {
  let newObj = {};
  for (var key in obj){
    newObj[key]=key.split("").reverse().join("");
  };
  return newObj;
};