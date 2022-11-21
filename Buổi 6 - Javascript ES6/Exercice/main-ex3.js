// Viết hàm để lấy mọi phần tử thứ n trong một mảng đã cho.
// VD: console.log(func([1, 2, 3, 4, 5, 6], 1)); => [1,2,3,4,5,6]
//         console.log(every_nth([1, 2, 3, 4, 5, 6], 3)); => [3,6]
console.log('Exercise 3')

array = [1,2,3,4,5,6,7,8,9,10]
array2 = [1,2,8,5,7,3,2,6,7]

const every_new = (arr,nth) => arr.filter((e,i) => i % nth === nth - 1 )


function every_nth(arr,filterIndex){
    resultArr = []
    arr.map(function(value,index,array){
        if((index + 1) % filterIndex === 0){
            resultArr.push(value)
        }
    })
    return resultArr;
}