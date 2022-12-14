var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//// Hướng đối tượng
var Human = /** @class */ (function () {
    function Human(nameHuman, age) {
        this.nameHuman = nameHuman;
        this.age = age;
    }
    Human.prototype.run = function () {
        console.log('run');
    };
    return Human;
}());
var StudentX = /** @class */ (function (_super) {
    __extends(StudentX, _super);
    //Khởi tạo 1 đối tượng
    function StudentX(nameHuman, age, idNew, studentName, studentClass) {
        var _this = _super.call(this, nameHuman, age) //Phải khai báo toàn bộ thuộc tính lớp cha
         || this;
        _this.id = idNew;
        _this.studentName = studentName;
        _this.studentClass = studentClass;
        return _this;
    }
    //Getter
    StudentX.prototype.getStudentName = function () {
        return this.studentName;
    };
    //Setter
    StudentX.prototype.setStudentName = function (studentNameNew) {
        this.studentName = studentNameNew;
    };
    //Overwrite, ts không có overload
    StudentX.prototype.run = function () {
        console.log('run child');
    };
    return StudentX;
}(Human));
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
var Ironman = /** @class */ (function (_super) {
    __extends(Ironman, _super);
    function Ironman(name, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.age = age;
        return _this;
    }
    Ironman.prototype.fly = function () {
        console.log('fly team');
    };
    Ironman.prototype.run = function () {
        console.log('');
    };
    Ironman.prototype.run2 = function () {
    };
    return Ironman;
}(People));
var student11 = new StudentX('Human Name', 20, 1, 'NaN', 'Class A');
//// Tính đóng gói (Encapsulation) - Access(getter), Modifiy(setter)
console.log(student11.id); //Dễ leak thông tin
// Properties ở private và protected không lấy được, phải dùng getter(lấy) và setter(sửa)
student11.setStudentName('Change');
console.log(student11.getStudentName());
//// Tính kế thừa (Inheritance): class extends, có extend phải có super
console.log(student11.nameHuman);
//// Tính đa hình (Polymorphism ): phương thức lớp con có thể ghi đè lớp cha
student11.run(); //"run child"
//// Tính trừu tượng(Abstraction): abstract interface, interface implements. Khai báo khung bắt class phải tuân theo
// Class Ironman kế thừa từ People nhưng k cần biết people cụ thể có gì. 1 Class chỉ kế thừa đc 1 abstract nhưng implement được nhiều interface
// Kết thừa class dùng extends, kế thừa interface dùng implements
