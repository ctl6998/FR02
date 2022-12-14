//// Hướng đối tượng
class Human{
    public nameHuman:string;
    public age:number;

    constructor(nameHuman:string,age:number){
        this.nameHuman = nameHuman;
        this.age = age
    }

    run():void{
        console.log('run')
    }
}

class StudentX extends Human{
    public id:number;
    protected studentName:string;
    private studentClass:string;

    //Khởi tạo 1 đối tượng
    constructor(nameHuman:string,age:number,idNew:number,studentName:string,studentClass:string){
        super(nameHuman,age) //Phải khai báo toàn bộ thuộc tính lớp cha
        this.id = idNew;
        this.studentName = studentName;
        this.studentClass = studentClass
    }

    //Getter
    getStudentName(){
        return this.studentName
    }

    //Setter
    setStudentName(studentNameNew:string){
        this.studentName = studentNameNew
    }

    //Overwrite, ts không có overload
    run():void{
        console.log('run child')
    }
}

interface Power{
    fly():void; //Không cần khái báo hàm cụ thể là gì - trừu tương
}

interface Man{
    name:string;
    age:number;
    run():void; //Không cần khái báo hàm cụ thể là gì - trừu tương
}

abstract class People{
    abstract run2():void; //Không cần khái báo hàm cụ thể là gì - trừu tương
}

class Ironman extends People implements Power, Man{
    name: string;
    age: number;
    constructor(name:string,age:number){
        super()
        this.name = name;
        this.age = age;
    }
    fly(){
        console.log('fly team')
    }

    run(){
        console.log('')
    }

    run2(){

    }
}

let student11 = new StudentX('Human Name',20,1,'NaN','Class A')

//// Tính đóng gói (Encapsulation) - Access(getter), Modifiy(setter)
console.log(student11.id); //Dễ leak thông tin
// Properties ở private và protected không lấy được, phải dùng getter(lấy) và setter(sửa)
student11.setStudentName('Change')
console.log(student11.getStudentName())


//// Tính kế thừa (Inheritance): class extends, có extend phải có super
console.log(student11.nameHuman)


//// Tính đa hình (Polymorphism ): phương thức lớp con có thể ghi đè lớp cha
student11.run() //"run child"


//// Tính trừu tượng(Abstraction): abstract interface, interface implements. Khai báo khung bắt class phải tuân theo
// Class Ironman kế thừa từ People nhưng k cần biết people cụ thể có gì. 1 Class chỉ kế thừa đc 1 abstract nhưng implement được nhiều interface
// Kết thừa class dùng extends, kế thừa interface dùng implements