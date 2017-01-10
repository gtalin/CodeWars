/*https://www.codewars.com/kata/implementing-the-array-object/train/javascript*/
/*Implementing array object without using arrays*/
function List(){
  for (var i=0;i<arguments.length;i++) {
    this[i] = arguments[i];
  }
  this["length"] = arguments.length;
}

List.prototype.push = function(){
  console.log("push");
  for (i=0;i<arguments.length;i++) {
    this[this.length+i] = arguments[i];
  }
  this.length = this.length + arguments.length;
  return this.length;
};

List.prototype.pop = function(){
  if (this.length!==0) {
    var toReturn = this[this.length-1];
    delete this[this.length-1];
    this.length = this.length -1;
    return toReturn
  }
  else return undefined;
};

List.prototype.shift = function(){
  if (this.length!==0) {
    var toReturn = this[0];
    delete this[this.length-1];
    this.length = this.length -1;
    return toReturn
  }
  else return undefined;
}

List.prototype.unshift = function(){
  shiftValuesToRight(this,arguments.length);
  for (var i=0;i<arguments.length;i++) {
    this[i] = arguments[i];
    this.length = this.length + 1;
  }
  function shiftValuesToRight(that, n) {
    for (var j=that.length-1;j>=0;j--) {
      that[j+n] = that[j];
    }
  }
  return this.length;
}

List.prototype.filter = function(){
  console.log(this);
  var tmp=[];
  var filtered=[];
  if (arguments.length!=0) {
    if(typeof arguments[0] === "function"){
      console.log("a callback");
      for (var i=0;i<this.length;i++){
        tmp.push(arguments[0](this[i]));
      }
      for (var i=0;i<tmp.length;i++) {
        if (!tmp[i]){
          delete this[i];
          this.length--;
          }
        else filtered.push(this[i]);
      }
    }
  }
  console.log(arguments[0].toString(), this);
  return filtered;
}

/*var list = new List(1,2,3,4);
list.pop();
console.log(Object.getOwnPropertyNames(list));
console.log(Object.getPrototypeOf(list));
console.log(Object.keys(list));
for (var keys in list) console.log(keys);
list.unshift(-1,0,1);*/