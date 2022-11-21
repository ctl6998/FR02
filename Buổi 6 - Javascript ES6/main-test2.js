console.log('test2')

//// function argument:
function sum(){
    console.log(arguments);
    
    // Đổi argument thành 1 array
    let arr = Array.from(arguments);
    console.log(arr);

    arr.map(function(value,index,arr){
        let result = 0
        return result += value
    })

    console.log(result)
}


sum(1,2,3,4,5,6,7,8,9,10)

/// Cách viết khác cho argument
// function sum(...param){
//     console.log(params)
// }


/// Cách viết khác cho arugment, dùng toán tử ... nối mảng

const arr3 = [1,2,3,4,5]
const arr4 = [1,2,3,4,5,...arr3]
function sum(...test1){
    console.log(test1);
}
sum(...arr4);


//// Dùng ... cho object
let obj2 = {
    name:'test',
    class:'a1'
}

// Object 3 có giá trị giống object 2 nhưng vùng bộ nhớ khác
let obj3 = {
    ...obj2,
    age:10
}

// Một cách khác lấy giá trị obj: Object desctrutoring
let {name,class} = obj2;


// Một cách khác lấy giá trị array: Arrya desctructoring
const [a,b] = [1,2];