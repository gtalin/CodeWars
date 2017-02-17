function TreeNode (value,left, right) {
    this.value = value;
    this.right = right;
    this.left = left;
};
function arrayToTree(array) {
  if (array.length!==0){
  var added2Tree = [];
  var nodeVal;
  nodeVal = array.shift();
  var root = new TreeNode(nodeVal);
  added2Tree.push(root);
  nodeVal = array.shift();
  var shift = false;
  while(array.length!=0) {
      if (shift) {
          /*This condition in place because else last value left*/
          nodeVal = array.shift();
      }
      node = added2Tree[0];
      if (node.left!==undefined && !node.right!==undefined) {
          console.log(node.left, node.right);
          node = added2Tree.shift();
      }
      var added = addNode (node,nodeVal);
      if(added) {
          /*Only goto next element of array when node added*/
          shift = true;
          /*Shift on next iteration else last */
          /*nodeVal = array.shift();*/
      }
      console.log(node,array);
  }
  console.log(root);
  return root;
}
else return undefined;

  function addNode (root, nodeval) {
      var node = new TreeNode(nodeval);
      /*console.log(root, root.left, root.right);*/
      if (!root.left) {
          root.left = node;
          added2Tree.push(node);
          return true;
      }
      else if (!root.right) {
          root.right = node;
          added2Tree.push(node);
          return true;
      }
      return false;
  }
};
var array = [17,0,-4,3,15];
arrayToTree(array);
