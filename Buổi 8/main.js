console.log('Initiated')

arr = ['class-1','class-2-test']

if(!localStorage.getItem('storage')) {
    localStorage.setItem('storage',JSON.stringify(arr));
}

var data = JSON.parse(localStorage.getItem('storage'));

let inputText = document.getElementById('textData')

/// Rendering function
function renderList(data) {
    var html = ''
    for (const iterator of data) {
        html += 
        `
        <li>${iterator}</li>
        `
    }

    addedClass = data.join(' ')

    var dataList = document.getElementById('data-list');
    dataList.innerHTML = html;
    dataList.className = addedClass;
}
renderList(data)

/// Submit function
document.getElementById('submit-btn').onclick = function dataSubmit(){
    newClass = inputText.value;

    if(newClass){
    filterClass(data,newClass);
    localStorage.setItem('storage',JSON.stringify(data));
    }

    inputText.value = ''
    renderList(data)
}

/// Delete function
document.getElementById('delete-btn').onclick = function dataDelete(){
    deleteClass = inputText.value;

    filterClassDelete(data, deleteClass);
    localStorage.setItem('storage',JSON.stringify(data));

    inputText.value = ''
    renderList(data)


}

/// Filter duplicate class in array
function filterClass(arr, check){
    let found = arr.some(val => val === check);
    if(!found){arr.push(check)}else{alert('Duplicated!')};
    return arr;
}

/// Delete duplicate class in array
function filterClassDelete(arr, check){
    let checkIndex = arr.indexOf(check);
    if (checkIndex > -1){
        arr.splice(checkIndex,1)
    };
    return arr;
}

// btn.onclick = function(){}
// btn.addEventListner('click',function(){})

// Có thể dùng getAttributes, setAttributes
// Tìm kiếm trong mảng: includes, for, map


// Thay vì if else, có thể dùng if(){return} + if(){return}