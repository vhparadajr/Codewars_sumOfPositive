function positiveSum(arr) {
  var sum=0
  for(i=0;i<arr.length;i++){
      if (arr[i]>=0){sum=sum+arr[i]}
  }
return sum
}
