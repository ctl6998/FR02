/// Các loại biến trong ES6
// Hoisting cho phép gọi trước khi được định nghĩa -> trả về undefiend
//console.log(a)
//var a = 10; // Có hoisting

//const b = 10; // Không có hoisting
//let c = 10; // Không có hoisting


/// this
// Trong object function gọi là method, function in general là method của window

const obj = {
    value: '10',
    action: function(){
        console.log(this.value);
        this.value ++;
        // var action2 = function(){
        //     console.log(this.value)
        // } 
        var action2 = ()=>{
            console.log(this.value)
        }
        // Thay thành raw function sẽ tự động tìm đến context gần nhất
        //action2(); //viết thế này sẽ hiểu là window gọi
        action2();

    }
}

obj.action();

// Use strict
// 'use strict'
// console.log(this)

// const student = {
//     name:'a',
//     getName: function(){
//         console.log(this.name)
//     }
// }
// let a = student.getName;
//a() // Viết thế này giống window.a(), this sẽ hiểu là window
//Không nền dùng raw function trong object


//// Hàm callback -> gọi lại 1 hàm
// function getName(param, callback){
//     let name = `Hello ${param}`
//     let name = 'Hello ' + param
//     return callback(name)
// }

// function logName(name){
//     console.log(name)
// }

// getName('ABC', logName);

function getName(param,callback,callback2){
    callback(param);
    callback2(param);
}

function logName(name) {
    console.log('Hi ' + name);
}

function logName2(name) {
    console.log('Bye ' + name);
}

getName('ABC',logName,logName2)

//// Closure và scope
// Closure: function có thể lấy giá trị biến trong parent
// Currening: truyền biến từ parent -> child. Tối ưu bộ nhớ hơn, chạy từ ngoài vào trong. Dưới lên trên

// function sum(){
//     let x = 10;
//     return function(){
//         console.log(x)
//     }
// }

function sum(x){
    return function(y){
        return x - y
    }
}

let result = sum(10);
console.log(result(9))


//// Array method
const arr = [1,2,3,4,5,6];

arr.forEach(function(item){
    console.log(item)
});

