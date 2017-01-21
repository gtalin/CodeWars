/*https://www.codewars.com/kata/57e5279b7cf1aea5cf000359*/
function TreeNode (value,left, right) {
	this.value = value;
	this.right = right;
	this.left = left;
};

var root = new TreeNode(5, 
	new TreeNode(-22, new TreeNode(9), 
		new TreeNode(50)), 
	new TreeNode(11, new TreeNode(9), new TreeNode(2)));


function maxSum(root) {
	var paths=[];
	pathsRecur(root, [], 0);
	var maxSum = paths.reduce(function(prev,curr){ return curr.sum>prev ? curr.sum : prev},0);
	console.log(maxSum)
	return maxSum

function pathsRecur(node,path, pathLen) {
	if (node) {
		path[pathLen] = node.value;
		pathLen++;
	}
	else return;

	if (!node.left && !node.right) {
		printArray(path, pathLen)
	}
	else {
		pathsRecur(node.left,path, pathLen);
		pathsRecur(node.right,path,pathLen);
	}
}

function printArray(path,pathLen) {
	var currentPath = "",sum=0;
	currentPath = path.join(",");
	sum = path.reduce(function(prev, curr){return prev+curr},0)
	paths.push({path:currentPath,length:pathLen,sum:sum});
}
}

console.log("Tree traversal");
console.log(root);
maxSum(root);