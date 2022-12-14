console.log('Ini ex 10')
// EX 10: 
// Viết hàm để lấy các số nguyên trong phạm vi (x, y).
// (1,9) => 2,3,4,5,6,7,8

function returnN(starter,ender){
    arr = []
    for(let i = starter+1; i<ender; i++){
        arr.push(i)
    }
    return arr.join(',')
}

