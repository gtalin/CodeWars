function bubbleSort(arr) {
  var n= arr.length;
  for (var loop=1;loop<arr.length;loop++) {
    //from 1 because 1 less than total number of the
    //elements because elements get into place from left 
    for (var i=1;i<n;i++) {
      if (arr[i-1]>arr[i])
        swap(arr, i-1, i);
      }
      n=n-1;
      console.log(arr)
    }
  }
  
function swap(arr,i,j) {
  var tmp;
  tmp = arr[i];
  arr[i]=arr[j];
  arr[j]=tmp;
  }
  
  var arr = [54,26,93,17,77,31,44,55,20];
  bubbleSort(arr)
