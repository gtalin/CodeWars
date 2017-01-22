/*https://www.codewars.com/kata/arrays-are-objects/train/javascript*/
var fn, // Methods
    magicArray; // Returns the magicArray
/*var magicArray = Object.create(fn);*/
function magicArray() {
  console.log(arguments, arguments.length, typeof arguments);
  var arr =[];
  if (typeof arguments[0] !=="array"){
    for (var i=0;i<arguments.length;i++) {
    arr[i] = arguments[i];
    }
    extend(arr, fn);
    return arr;
  }
  else {
    extend(arguments[0], src);
    return arguments[0];
  }
}

function extend(obj, src) {
    for (var key in src) {
        if (src.hasOwnProperty(key)) obj[key] = Object.call(obj,src[key]);
        /*can't just do: obj[key] = src[key] coz then won't be able to
        access array when we call function like testArray.count()
        If we use bind here then testArray.count() will pint to function 
        and not be executed.
        */
    }
    /*console.log("The object with methods", obj);*/
    return obj;
}
/*extend(magicArray,fn);*/

fn = {
getFiltered : function(fun){
  var filtered = this.filter(fun);
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      if (typeof this[key] == "function")
        Object.defineProperty(filtered, key, {value: this[key], enumerable: false});
    }
  }
  /*return this.filter(fun);*/
  /*return Object.keys(this).filter(fun);*/
  return filtered
},
getRejected : function(fun){
  var filtered = this.getFiltered(fun);
  /*if use getFiltered without parameter, encounter error*/
  var rejected = [];
  /*for (var i=0;i<this.length;i++) {
      if (filtered.indexOf(this[i])===-1)
        rejected.push(this[i]);*/
    for (var key in this) {
      if (this.hasOwnProperty(key) && filtered.indexOf(this[key])===-1) {
        if (typeof this[key] == "function")
          Object.defineProperty(rejected, key, {value: this[key], enumerable: false});
        else rejected.push(this[key]);
      }
    }
  return rejected;
},
getSplit : function(fun){
  return {pass: this.getFiltered(fun), fail: this.getRejected(fun)};
},
count : function(){
  /*can use this here coz we used call to bind this*/
  return this.length;
},
double : function(){
  len=this.length;
  for (var i=0;i<len;i++) {
    this.push(this[i]);
  }
  return this;
},
multiply : function(n){
  /*return this.map(function(ele){return ele*n});*/
  /*Above prevents chaining coz this is unchanged*/
  /*Need to change original array*/
  for (var i=0;i<this.length;i++) {
    this[i] = this[i]*n
  }
  return this;
},
first : function(){
  /*Original array unchanged but returned array should've methods*/
  var props = Object.getOwnPropertyNames(this);
  var tmp = [];
  tmp.push(this[0]);
  /*for (var i=0;i<props.length;i++) {
    if (typeof props[i]== "function") {
    tmp[props[i]] = props[i];}
  }*/
  tmp = extend(tmp,fn);
  console.log(tmp);
  return extend(tmp,fn);
},
last : function(){
  var last = this[this.length-1];
  var tmp = Array.apply(null,Array(1)).map(ele=>last);
  return extend(tmp,fn);
},
eq : function(n){
  var tmp = Array.apply(null,Array(1)).map(ele=>this[n]);
  return extend(tmp,fn);
}
};

function addObjects() {
}

var testArray = magicArray(1, 2, 3, "a", "b", "c"), // [1, 2, 3, "a", "b", "c"]
  testArrayAlt = magicArray([1, 2, 3, "a", "b", "c"]); // [1, 2, 3, "a", "b", "c"]
testArray.count();  
