console.log('test')
console.log('a');

// Khai báo trong ts phải đi kèm type
let a:string = 'string';

let b:Number;

let boo:Boolean = true;

// Khai báo mảng với kiểu dữ liệu có 2 cách
let arr:number[] = [1,2,3,45]
let arr2:Array<string> = ['1','www']

// Khai báo object
let obj = {
    name1: '1111'
}

obj.name1 = '10000'


// Class đặc biệt
enum STATuS_JOB {
    START=100,
    TODO, //STATUS.TODO = 102
    DONE  //STATUS.DONE = 103
}

//// Tuple - khai báo khung dữ liệu
let test: [number,string];
test = [3, 'aaa']

//// Khai báo kiểu dữ liệu tự do - giống JSS
let c:any = '100'

// Array, null, undefined, object

//// Khai báo function
function test3(){}

function test4():string{
    return ''
} // Khai báo để bắt buộc kết quả trả về là string

function test5():void{
    // Khái báo void để chỉ thực thi hàm không yêu cầu két quả trả về
} 

function getStatus():boolean{
    return true
}

function test6():number{
    return 1 + 2
}

//// Khai báo arrow function
let a2 = ():number=>{
    return 1
}

/////////////////////// 
/// Object Interface /////////

interface Student{
    nameStudent:string;
    age:number
}

let student1:Student = {
    //classStudent:string = 'al' // Phải apply đúng bộ khun của Student
    nameStudent:"NaN",
    age:50
}

let student2:Student = {
    nameStudent:"HaH",
    age:48
}