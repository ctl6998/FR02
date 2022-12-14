console.log('Ini ex 7')

// Viết hàm lấy ra phần tử đầu tiên của mảng nếu không nhập tham số ‘n’. Nếu nhập tham số ‘n’ sẽ lấy ra phần tử ở vị trí thứ n của mảng
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

test = [7,9,0,-2]
test2 = []

function first(arr,count){
    if(typeof(count) === "undefined"){
        count = 1
    }

    if(count>arr.length){
        count = arr.length
    }

    if(count<0){
        count = 0
    }

    return result = arr.slice(0,count)
}

/////////////////////
/// Không phải chạy hết if
let first2 = (arr,n) => {
    if(arr === null){
        return 0
    }

    if(n === null){
        return arr[0]
    }

    if(n<0){
        return []
    }

    return arr.slice(0,n)
}