// console.log('run 1');

// setTimeout(function(){
//     console.log('run 2');
// },5000)

// console.log('run 3');
// 

//////////////////////////////
function a() {
    //
}

function b() {
    a()
}

function c() {
    b()
}

c(); //LIFO: Last in first out. C gọi B, B gọi A. Chạy A đầu tiên

/// Muốn settimeout theo thú tự
// setTimeout(function(callback){
//     callback()
//     console.log('run 2');
// },5000)
// Lồng hàm trong hàm -> call back hell
// solution: Promise

var a = 10;
let p = new Promise((resolve, reject)=>{
    if(a===10){
        resolve(a) /// trả về 1 dữ liệu khi resolve 
    }
    else{
        reject('Error')
    }
})

console.log(p)

p
.then((res)=>{
    console.log(res)
    return res + 10 //lấy dữ liệu trả về từ promise, chỉ dùng được với promise
    // phải return mới trở thành 1 promise
})
.then((data)=>{     //execute khi return resolve(), hoặc có kết quả return
    console.log(data)
})
.catch(()=>{        //excute khi return reject()

})
.finally(()=>{
    console.log('done') //
})

// thằng trên thực thi xong đưa kết quả để thằng dưới execute