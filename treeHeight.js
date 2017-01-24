/*This is not a codewars kata 
Was reading AVL in DSA. Encountered height of a BST
*/
function TreeNode (value,left, right) {
	this.value = value;
	this.right = right;
	this.left = left;
};

function height(node) {
	if (node == null || node == undefined) {
		return -1;
	}
	var lefth = height(node.left);
	var righth = height(node.right);
	 return (Math.max(lefth,righth)+1);
}
var root = new TreeNode(5, 
	new TreeNode(-22, new TreeNode(9), 
		new TreeNode(50)), new TreeNode(11, 
		new TreeNode(9), new TreeNode(2, new TreeNode(3)))); 
console.log("root", JSON.stringify(root));
console.log(height(root));