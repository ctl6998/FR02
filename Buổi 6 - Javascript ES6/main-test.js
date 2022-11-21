// console.log('test')

// var price = function(x){
//     return promo1 = function(y) {
//         return x - x*y
//     }
// };

// let productPrice = price(10000);
// let finalPrice = productPrice(0.2)
// console.log(`Final price is: ${finalPrice}`);

//// Viết lại hàm forEach
const arr = [1,2,3,4,5,6];

/// Viết Callback
function forEachNew(param,callback){
    return callback(param)
}

function callback(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

// forEachNew(arr,callback)

/// Viết Method dùng prototype
Array.prototype.forEachNew = function(callback){
    return callback(this)
}

function callback2(arr){
    for(i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

arr.forEachNew(callback2)


/// Callback nhưng thay thế được function bên trong
function myForEach(arr, callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i])
    }
}

myForEach(arr, function(item){
    console.log(item * 2);
})



//// Prototype
// Object constructor

function Dog(name,type){
    this.name = name;
    this.type = type;
}

// Tạo hàm dùng chung cho class có tên là Dog, thay vì dùng new là khởi tạo mới
// Prototype -> khởi tạo 1 lần, dùng tất cả các lớp
Dog.prototype.run = function() {
    console.log('run')
}

let dog = new Dog('123','pug')
let dog2 = new Dog('1234','bull')
console.log(dog.run === dog2.run)

//// map() method
let result = arr.map(function(item,index,arr){
    return item *2
})

// Viết lại map(): nhận array + callback -> trả về array
function mapNew(arr,callback) {
    let newArr = []
    for(let i=0;i<arr.length;i++) {
        let newArrItem = callback(arr[i],i,arr)
        newArr.push(newArrItem)
    }
    return newArr
}
// Viêt lại map(): dùng prototype
Array.prototype.map3 = function(callback){
    let newArr = []
    for(let i=0;i<this.length;i++) {
        let newArrItem = callback(this[i],i,this)
        newArr.push(newArrItem)
    }
    return newArr
}

let result2 = mapNew(arr,function(item,index,arr){
    return item*2
})

let result3 = arr.map3(function(item,index,arr){
    return item*2
})