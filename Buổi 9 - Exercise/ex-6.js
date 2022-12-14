/// Viết hàm clone lại một mảng (tạo 1 mảng mới tương tự)

arrayIni = [1,2,3]

///Cách 1
function cloneArr(arr) {
    let x = [...arr]
    return x
}

///Cách 2
function cloneArr2(arr) {
    let x = arr.slice()
    return x
}

///Cách 3
function cloneArr3(arr) {
    JSON.stringify(arr)
    //...
}

///Cách 4
function cloneArr4(arr) {
    let x = arr.map((index,item) => item)
    return x
}

///Cách 5
function cloneArr5(arr) {
    Array.from()
}

///Map, Slice trả về hamg fmoiws