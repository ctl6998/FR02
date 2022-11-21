let arr = 
    [
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
        {id:'',imgUrl:'al',title:'Card title 1',desc:'Lorem ipsum'},
    ]

const urlRoot = 'https://63778f6e81a568fc2519343a.mockapi.io'

/// Gọi dữ liệu từ API bằng ajax Jquery
function getData(){
$.ajax({
    url: `${urlRoot}/Storemock`,
    type: 'GET',
    dataType: 'json', // added data type
    beforeSend: function(){
        $('#loading-image').show();
    },
    success: function(res) {
        data = res;
        insertData(data);
        $('#loading-image').hide();
    }
});
}
getData()

let ipName = document.getElementById('dataName');
let ipImage = document.getElementById('dataImage');
let ipPrice = document.getElementById('dataPrice');
let ipLink = document.getElementById('dataLink');

/// Add dữ liệu vào databse API
document.getElementById("submit-btn").onclick = function dataSubmit(){
    let obj = {nameProduct:'',img:'',price:'',link:''}
    obj.nameProduct = ipName.value;
    obj.img = ipImage.value;
    obj.price = ipPrice.value;
    obj.link = ipLink.value;
    if(obj.nameProduct && obj.img && obj.price && obj.link) {
        $.ajax({
            url: `${urlRoot}/Storemock`,
            type: 'POST',
            dataType: 'json',
            data: obj,
            beforeSend: function(){
                $('#loading-image').show();
            }, 
            success: function(res) {
                getData();
                $('#loading-image').hide();
            }
        })
    }

}

/// Xóa lữu liệu trong database API
function deleteItem(itemId){
    $.ajax({
        url: `${urlRoot}/Storemock/${itemId}`,
        type: 'DELETE',
        dataType: 'json',
        beforeSend: function(){
            $('#loading-image').show();
        }, 
        success: function(){
            getData();
            $('#loading-image').hide();
        }
    });
}

/// Edit dữ liệu trong database API
let ipHidden = document.getElementById('dataHidden');

function renderEditData(itemId) {
    let obj = data.find(o => o.id === `${itemId}`)
    ipName.value = obj.nameProduct;
    ipImage.value = obj.img;
    ipPrice.value = obj.price;
    ipLink.value = obj.link;
    ipHidden.setAttribute("value",itemId);
}

document.getElementById('update-btn').onclick = function dataEdit(){
    
    itemId = ipHidden.getAttribute('value');
    
    let obj = {nameProduct:'',img:'',price:'',link:''}
    obj.nameProduct = ipName.value;
    obj.img = ipImage.value;
    obj.price = ipPrice.value;
    obj.link = ipLink.value;

    $.ajax({
        url: `${urlRoot}/Storemock/${itemId}`,
        type: 'PUT',
        dataType: 'json', 
        data: obj,
        beforeSend: function(){
            $('#loading-image').show();
        }, 
        success: function() {
            getData();
            $('#loading-image').hide();
        }
    });

    ipName.value = '';
    ipImage.value = '';
    ipPrice.value = '';
    ipLink.value = '';
}



/// Hàm vẽ Table từ Data trả về
function insertData(data){

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
