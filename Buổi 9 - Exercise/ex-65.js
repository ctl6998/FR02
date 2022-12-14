// Viết một hàm để nối một chuỗi n lần (mặc định là 1).
// Test case: 
// console.log(repeat('Ha!')); => "Ha!"
// console.log(repeat('Ha!',2)); => "Ha!Ha!"
// console.log(repeat('Ha!',3)); => "Ha!Ha!Ha!"


console.log("Ex 6")

function repeat(string,number){
    e = []
    if(!number){
        number == 1
        e.push(string)
    }
    else {
    for(i=0;i<number;i++){
        e.push(string)
    }
    }
    return e.join('')
}

console.log(repeat('Ha!'))

/////////////////////////////////

let result = function repeat2(str,count){
    if(typeof(count) === 'undefined'){
        count = 1
    }

    return count < 1 ? '' : new Array(count + 1).join(str)
}

new Array()

/// Tạo 1 array mới: new Array(độ dài mảng)
console.log(result('He!'))
console.log(result('He!',2))
console.log(result('He!',3))