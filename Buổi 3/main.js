//// Các cách đặt tên
// var isDisableMenu;
// var IsDisableMenu;
// var is_disable_menu;

//// Variable type
// var number = 12.3;
// var str = '';
// var isNumber = true;
// var obj = {};
// var arr = {};
// var null

//// Operators
// + - * / % 
// AND OR = += ==

//// if, else, switch
// if(true){
//     console.log('first log');
// }

// var a = 10;
// var b = 20;
// if (a==10 || b != 20){
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// switch(key) {
//     case value:

//         break;
// }

//// Object
var student = {
    name: "Le Van A",
    age: 24,
    class: 'student-name'
}

var student2 = {
    name: "Le Van A",
    age: 24,
    class: 'student-name'
}

// console.log(student);
// console.log(student['class']);
// console.log(student.class);
// Remind: Object khai báo vùng bộ nhớ cụ thể, không phải giá trị

//// Array
var arr = [1,'string',true, student];
arr[0] = 10;
console.log(arr);

//// Loop
// for(let index=0; index < arr.length; index++) {
//     console.log(arr[index]);
// }
var length = arr.length;

for(let index=0; index < length; index++) {
    console.log(arr[index]);
}

//// Function
// Khai báo declaration
function sum() {
    console.log(1+1);
}
sum()

// Khai báo expression
var x = function() {
    console.log(1+1);
}
x();

var student3 = {
    name: "Le Van A",
    age: 24,
    class: 'student-name',
    study:
    function() {
        console.log(1+1);
    }
};
console.log(student3);

//// Array Method
// Method quan tâm đầu vào (parameter) và đầu ra (value)
// Phương thức được khai báo sẵn
// Bản chât array cũng là 1 object

const fruits = [1,2,3,4];
let fruit = fruits.pop();
console.log(fruits);
console.log(fruit);

const testNum = [1,2,3,4];
let testNewNum = testNum.push(7);
console.log(testNewNum);

// shift(), splice(), slice()

//// Math Object

//// Block scope
// Global: 
// var a = 10;
// function num(){
//     var a = 20;
// }

// console.log(a);

// var a = 10; // Biến a là giá trị được truy cập global
function log(){
    var a = 10;
    a+=1;
}
log();
log();
log();

console.log(a); // Sẽ chỉ tìm giá trị global