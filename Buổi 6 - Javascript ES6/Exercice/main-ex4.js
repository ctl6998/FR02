// Viết hàm để lọc ra các giá trị không phải là duy nhất trong một mảng.
// VD: console.log(filter_arr([1, 2, 2, 3, 4, 4, 5])) => [1,3,5]

console.log('Exercise 4')

array = [1,2,2,2,3,4,4,4,5,6]

function filter_arr(arr) {
    arr.filter(function(value,index){
        arr.indexOf(value) === index
    })
}

const value = (arr) => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i))
console.log(value(array))