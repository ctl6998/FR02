console.log('Ex 5')
// Viết hàm chuyển định dạng chữ từ camel case sang lower case
// Test case: 
// console.log(uncamecase('helloWorld')); => hello world
// console.log(uncamecase('helloWorld','-')); => hello-world
// console.log(uncamecase('helloWorld','_')); =>  hello_world

// Dùng hàm replace

var input = "helloWorldHelLo"


// function uncamecase(stringInput,sepa){
//     upperPosition = findUppcaseIndex(stringInput)
//     let result = ''

//     for(i=0;i<upperPosition.length;i++){
//         let count = upperPosition[i]
//         result = stringInput.replace(stringInput[count],`${sepa}`)
//     }
//     return result
    
// }

// function findUppcaseIndex(stringInput){
//     let positions = []
//     for(let i=0;i<stringInput.length;i++){
//         if(stringInput[i].match(/[A-Z]/) != null){
//             positions.push(i)
//         }
//     }
//     return positions
// }

function uncamecase(strInput,sepa){
    if(!sepa){
        sepa = ''
    }

    var str = strInput.replace(/[A-Z]/g,function(letter){
        console.log(letter)
        return sepa + letter.toLowerCase();
    })

    console.log(str)
}