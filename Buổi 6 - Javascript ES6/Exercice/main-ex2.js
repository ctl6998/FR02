//let arr = [1, 2, 3, 1, 2, 3]; console.log (filter(arr, 1, 3)); => [2,2]
console.log('Exercise 2');

array = [1,2,3,1,2,3]

function myIndexOf(arr,...filterNumber){

    /// Nếu trong array có giá trị lọc trả về index trùng
    for(var i=0;i<arr.length;i++){
        for(var j=0; j<filterNumber.length;j++){
            if(arr[i] === filterNumber[j]) {
                return i;
            }
        }
    }

    /// Nếu trong array không có giá trị lọc trả về -1
    return -1;
}

function myFilter(arr,...filterNumber) {
    console.log(filterNumber)
    let filterArray = [];

    for(var i=0;i<arr.length;i++){
        checkValue = myIndexOf(filterNumber,arr[i])
        if(checkValue == -1){
            filterArray.push(arr[i])
        }
    }
    return filterArray
}
