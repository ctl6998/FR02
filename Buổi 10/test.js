//Promise chỉ chạy tiếp khi có return resolve(), .then chỉ chạy khi có promise


let ini = true;
let p1 = new Promise((resolve,reject)=>{
    if(ini === true){
        return resolve()
    }else{
        reject('Error')
    }
})

p1.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log(1);
            return resolve();
        },3000)
    })
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log(2);
            return resolve();
        },3000)
    })
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log(3);
            return resolve();
        },3000)
    })
})
.then(()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log(4);
            return resolve();
        },3000)
    })
})

console.log(p)