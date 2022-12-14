/// this gọi dữ liệu từ thằng nào tác động trực tiếp đến nó



const person = {
    name: 'test',
    age: 10,

    getName: function(){
        console.log(this.name, this.age)
    }
}


// document.querySelector('button').onclick = person.getName()
// Trả về undefiend do this sẽ lấy từ button

document.querySelector('button').onclick = person.getName.bind(person) //Trả về 1 hàm, chờ action, ví dụ

function getLog(a,b,c){
    console.log(a,b,c + this.name + this.age)
}


let getLogToday = getLog.bind(null,'1','2')
getLogToday('message Today')

document.querySelector('button').onclick = person.getName.call(person) //Chạy luôn, trả về Test 10
document.querySelector('button').onclick = person.getName.apply(person) //Chạy luôn, trả về Test 10

