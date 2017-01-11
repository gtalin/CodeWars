/*https://www.codewars.com/kata/52ffcf5eaff455b3c200074b*/
/*Write a function evilTwin(obj) which returns a new object with all the same properties as obj, 
and with an additional property hasGoatee set to true.
If the original object is modified, its twin should reflect the changes
But old object should not reflect changes made to new
*/
function evilTwin(obj) {
  var twin = Object.create(obj);
  /*Object.create(obj) creates an object that inherits from obj
  But unlike with = assignment twin will not point to obj.
  Thus an addition made to twin will not affect obj.
  But a change made to obj specific key will be reflected in 
  inherited keys*/
  twin["hasGoatee"] = true;
  return twin;
}