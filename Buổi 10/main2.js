///Convert to promise


// let changeColor = function(){
//     return new Promise((resolve,reject)=>{
//         console.log('start')
//         resolve()
//     })
// }

// changeColor()
// .then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             document.querySelector('body').style.background = 'blue'
//             resolve()
//         },1000)
//     })
// })
// .then(()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(function(){
//             document.querySelector('body').style.background = 'red'
//             resolve()
//         },1000)
//     })
// })

let changeColor = function(color,timer){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.querySelector('body').style.background = color
            resolve()
        },timer)
    })
}

changeColor('red',1000)
.then(()=>{
    changeColor('blue',1000)
})
.then(()=>{
    changeColor('green',1000)
})
