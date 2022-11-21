let arr = 
    [
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
    ]
/// Set giá trị id theo index của object trong array

function setIndex(array) {
    array.forEach((object,i) => object.id = i)
} 
setIndex(arr);

/// Check LocalStorage đã có dữ liệu gốc hay chưa
if(!localStorage.getItem('dataStorage')) {
    localStorage.setItem('dataStorage',JSON.stringify(arr));
}

//// Lưu JSON vào biến dùng Parse và getItem từ LocalStorage
var data = JSON.parse(localStorage.getItem('dataStorage'));

/// Check LocalStorage đã có dữ liệu mới hay chưa
if(localStorage.getItem('dataStorage')) {
    arr = data;
}
else {
    arr = []
}


/// Hàm vẽ Table từ Data trong Local Storage
function insertData(data) {

var html = ''
for (const item of data) {
    html += 
    `
    <tr>
    <td>${item.id}</td>
    <td>${item.imgUrl}</td>
    <td>${item.title}</td>
    <td>${item.desc}</td>
    <td>
    <button onclick="deleteData(${item.id})">Delete</button>
    <button onclick="renderEditData(${item.id})">Edit</button>
    </td>
    </tr>
    `
}

var dataTable = document.getElementById('data-table');
dataTable.innerHTML = html;

};
insertData(data);


/// Hàm Submit Data vào Local Storage
let ipUrl = document.getElementById('dataUrl');
let ipTitle = document.getElementById('dataTitle');
let ipDesc = document.getElementById('dataDesc');

document.getElementById("submit-btn").onclick = function dataSubmit() {
    let obj = {id:'',imgUrl:'',title:'',desc:''}
    obj.imgUrl = ipUrl.value;
    obj.title = ipTitle.value;
    obj.desc = ipDesc.value;
    obj.id = data.length;

    if (obj.imgUrl && obj.title && obj.desc) {
        data.push(obj);
        localStorage.setItem('dataStorage',JSON.stringify(data));
        insertData(data);
    } else {
        alert('Can not find data to add, please add data')
    }

    // ipUrl.value = '';
    // ipTitle.value = '';
    // ipDesc.value = '';
}

/// Hàm Deleta Data
// onclick="deleteData(${item.id}) được add trong mỗi nút Delete
function deleteData(e) {
    data.splice(e,1);
    console.log('Delete Post ID: ' + e);

    setIndex(data);

    localStorage.setItem('dataStorage',JSON.stringify(data));
    insertData(data);
}

/// Hàm Edit Data
let ipHidden = document.getElementById('dataHidden');

function renderEditData(e) {
    arrIndex = e;
    ipUrl.value = arr[arrIndex].imgUrl;
    ipTitle.value = arr[arrIndex].title;
    ipDesc.value = arr[arrIndex].desc;

    ipHidden.setAttribute("value",e);
}

document.getElementById("update-btn").onclick = function dataEdit() {
    indexNum = ipHidden.getAttribute('value');
    arrIdNew = indexNum;
    data[arrIdNew].imgUrl = ipUrl.value;
    data[arrIdNew].title = ipTitle.value;
    data[arrIdNew].desc = ipDesc.value;

    localStorage.setItem('dataStorage',JSON.stringify(data));
    insertData(data);

    ipUrl.value = '';
    ipTitle.value = '';
    ipDesc.value = '';
}

