const arr = [20,1,23,44,123,123,45];
arr.sort(function(a,b){return b-a;});
for(let i = 0; i<arr.length-2; i++){
    
    if(arr[i] !== arr[i+1]){
        let index = arr[i+1];
        console.log(index)
        return;
    }
}
