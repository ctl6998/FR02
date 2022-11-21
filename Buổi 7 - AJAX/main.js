let arr = 
    [
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
    ]

const urlRoot = 'https://63778f6e81a568fc2519343a.mockapi.io'

/// Gọi dữ liệu từ API bằng ajax Jquery
$.ajax({
    url: `${urlRoot}/Storemock`,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
        data = res;
        insertData(res);
    }
});



/// Add dữ liệu vào databse API
let ipName = document.getElementById('dataName');
let ipImage = document.getElementById('dataImage');
let ipPrice = document.getElementById('dataPrice');
let ipLink = document.getElementById('dataLink');

function add() {
    $.ajax({
        url: `${urlRoot}/Storemock`,
        type: 'POST',
        dataType: 'json', // added data type
        data:{
            "nameProduct":"nameProduct 10",
            "img":"img 2",
            "price":"2000000",
            "link":"link 2",
            "id":"2"
        },
        success: function(res) {
            console.log(res);
        }
    });
}

/// Xóa lữu liệu trong database API
function deleteItem(itemId) {
    $.ajax({
        url: `${urlRoot}/Storemock/${itemId}`,
        type: 'DELETE',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res)
        }
    });
}

///Edit dữ liệu trong database API
function edit() {
//     let obj = {id:'',imgUrl:'',title:'',desc:''}
//     obj.imgUrl = ipUrl.value;
//     obj.title = ipTitle.value;
//     obj.desc = ipDesc.value;
//     obj.id = data.length;


    $.ajax({
        url: `${urlRoot}/Storemock`,
        type: 'PUT',
        dataType: 'json', // added data type
        data:{
            "nameProduct":"nameProduct 999999999",
            "img":"img 2",
            "price":"2000000",
            "link":"link 2",
            "id":"2"
        },
        success: function(res) {
            console.log(res);
        }
    });
}

/// Hàm vẽ Table từ Data trong Local Storage
function insertData(data) {

var html = ''
for (const item of data) {
    html += 
    `
    <tr>
    <td>${item.id}</td>
    <td>${item.nameProduct}</td>
    <td>${item.img}</td>
    <td>${item.price}</td>
    <td>${item.link}</td>
    <td>
    <button onclick="deleteItem(${item.id})">Delete</button>
    <button onclick="renderEditData(${item.id})">Edit</button>
    </td>
    </tr>
    `
}

var dataTable = document.getElementById('data-table');
dataTable.innerHTML = html;

};

// /// Hàm Submit Data vào Local Storage

// document.getElementById("submit-btn").onclick = function dataSubmit() {
//     let obj = {id:'',imgUrl:'',title:'',desc:''}
//     obj.imgUrl = ipUrl.value;
//     obj.title = ipTitle.value;
//     obj.desc = ipDesc.value;
//     obj.id = data.length;

//     if (obj.imgUrl && obj.title && obj.desc) {
//         data.push(obj);
//         localStorage.setItem('dataStorage',JSON.stringify(data));
//         insertData(data);
//     } else {
//         alert('Can not find data to add, please add data')
//     }

//     // ipUrl.value = '';
//     // ipTitle.value = '';
//     // ipDesc.value = '';
// }

// /// Hàm Deleta Data
// // onclick="deleteData(${item.id}) được add trong mỗi nút Delete
// function deleteData(e) {
//     data.splice(e,1);
//     console.log('Delete Post ID: ' + e);

//     setIndex(data);

//     localStorage.setItem('dataStorage',JSON.stringify(data));
//     insertData(data);
// }

// /// Hàm Edit Data
// let ipHidden = document.getElementById('dataHidden');

// function renderEditData(e) {
//     arrIndex = e;
//     ipUrl.value = arr[arrIndex].imgUrl;
//     ipTitle.value = arr[arrIndex].title;
//     ipDesc.value = arr[arrIndex].desc;

//     ipHidden.setAttribute("value",e);
// }

// document.getElementById("update-btn").onclick = function dataEdit() {
//     indexNum = ipHidden.getAttribute('value');
//     arrIdNew = indexNum;
//     data[arrIdNew].imgUrl = ipUrl.value;
//     data[arrIdNew].title = ipTitle.value;
//     data[arrIdNew].desc = ipDesc.value;

//     localStorage.setItem('dataStorage',JSON.stringify(data));
//     insertData(data);

//     ipUrl.value = '';
//     ipTitle.value = '';
//     ipDesc.value = '';
// }


/////////////////////////////////////
