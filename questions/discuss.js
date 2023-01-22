function rainDance(arr){
    let ans =[];
    for(let i=0;i<arr.length;i++){
        let obj ={};
        obj.name=arr[i].name;
        let sum =0;
        let rainfallArr = arr[i].rainfall;
        for(let j=0;j<rainfallArr.length;j++){
            sum+=rainfallArr[j];
        }
        let avg = sum/rainfallArr.length;
        obj.avg = avg;
        ans.push(obj);
    }
    return ans;
}

console.log(rainDance([
    {name :"Delhi",rainfall:[2.3,4,3,5,3.5,5,4]}
]))