/// Hàm test Add dữ liệu
function add() {
    $.ajax({
        url: `${urlRoot}/Storemock`,
        type: 'POST',
        dataType: 'json', // added data type
        data:{
            "nameProduct":"nameProduct 12",
            "img":"img 2",
            "price":"2000000",
            "link":"link 2",
            "id":"2"
        },
        success: function(res) {
            data.push(res);
        }
    });
}

function deleteItemTest(itemId) {
    $.ajax({
        url: `${urlRoot}/Storemock/${itemId}`,
        type: 'DELETE',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res)
        }
    });
}


function editItemTest(itemId) {
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
