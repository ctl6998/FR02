console.log('Ini ex 9')

// EX 9: 
// Tìm phần tử xuất hiện nhiều nhất trong mảng:

iniArr = [1,1,2,2,3,3,5,5,5,5,5,6,6,6,6,6,6,6,6,6,'a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']
var counts = {};
function theMost(arr){
    arr.forEach(e => {
        counts[e] = (counts[e]||0) + 1  
    })
    console.log(counts)
    let max = Math.max(...Object.values(counts))
    let number = getKeyByValue(counts,max)
    console.log(number)
}


// TÌm key từ value trong object
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }


/// Cách khác là dùng 2 for search giá trị max