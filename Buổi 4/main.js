var arr = [
    {id:1,name:'test1',class:'al'},
    {id:2,name:'test2',class:'al'},
    {id:3,name:'test3',class:'al'},
    {id:4,name:'test4',class:'al'},
]


// for (let i = 0; i < arr.length; i++) {
//     html += 
//     '<tr>' +
//         '<td>' + arr[i].id + '</td>' +
//         '<td>' + arr[i].name + '</td>' +
//         '<td>' + arr[i].class + '</td>' +
//     '</tr>'
// }

//Interpolation
function insertData() {
var html = ''
for (const item of arr) {
    html += 
    `
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.class}</td>
    <td>
    <button onclick="deleteData(${item.id})">Delete</button>
    <button onclick="renderEditData(${item.id})">Edit</button>
    </td>
    </tr>
    `
}

var dataTable = document.getElementById('data-table');
// var dataTable = document.querySelector('table tbody');
dataTable.innerHTML = html;

};
insertData();

function deleteData(e) {
    console.log(e);
    arrId = e - 1;
    console.log(arrId);
    // arr[arrId].id = '';
    // arr[arrId].name = '';
    // arr[arrId].class = '';

    arr.splice(e-1,1);
    insertData();
}

/// Dùng index tối ưu hơn, viết 1 hàm find index

/// Insert Data
let ipName = document.getElementById('dataName');
let ipClass = document.getElementById('dataClass');

document.getElementById("submit-btn").onclick = function dataSubmit() {
    let obj = {id:'',name:'',class:''}
    obj.name = ipName.value;
    obj.class = ipClass.value;
    obj.id = arr.length + 1;

    if (obj.name && obj.class) {
        arr.push(obj);
        localStorage.setItem('test',JSON.stringify(arr));
        insertData();
    } else {
        alert('Can not find data to add, please add data')
    }

    // ipName.value = '';
    // ipClass.value = '';
}


// Edit Data
let ipUpdate = document.getElementById('submit-btn');
let ipHidden = document.getElementById('dataHidden');

function renderEditData(e) {
    arrId = e - 1;
    ipName.value = arr[arrId].name;
    ipClass.value = arr[arrId].class;
    ipHidden.setAttribute("value",e);
}

document.getElementById("update-btn").onclick = function dataEdit() {
    indexNum = ipHidden.getAttribute('value');
    arrIdNew = indexNum - 1;
    arr[arrIdNew].name = ipName.value;
    arr[arrIdNew].class = ipClass.value;
    insertData();
    ipName.value = '';
    ipClass.value = '';
}

// Lưu vào local Storage
//// Tạo JSON, lưu vào LocalStorage với setItem
// localStorage.setItem('test',JSON.stringify(arr));
// localStorage.getItem('test')

//// Lưu JSON vào biến dùng Parse và getItem từ LocalStorage
var data = JSON.parse(localStorage.getItem('test'))