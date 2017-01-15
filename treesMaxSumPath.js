/*https://www.codewars.com/kata/fun-with-trees-max-sum/train/javascript*/
function maxSum(root) {
    if (root) {
      if (root.left || root.right) {
        var childSums=[];
        console.log(childSums);
        if (root.left) {childSums.push(maxSum(root.left) + root.value);console.log(root.left,childSums)}
        if (root.right) {childSums.push(maxSum(root.right) + root.value);console.log(root.right,childSums);}
        return Math.max(childSums);
      }
      else return root.value;
    }
    else return 0;
}