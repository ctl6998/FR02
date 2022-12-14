//// Tạo Interface để tạo 1 mảng dữ liệu học viên
interface classMember {
    firstName:string,
    lastName:string,
    age:number,
    email:string,
    address:string,
    marriage:boolean,
}

let classArray: Array<classMember> = [
    {firstName:'string',lastName:'string',age:22,email:'string',address:'string',marriage:false},
    {firstName:'string',lastName:'string2',age:22,email:'string',address:'string',marriage:false}
]

let classArrayTest:classMember[] = [
    {firstName:'string',lastName:'string',age:22,email:'string',address:'string',marriage:false},
    {firstName:'string',lastName:'string2',age:22,email:'string',address:'string',marriage:false}
]