/// Hàm input dữ liệu từ Local Storage
console.log('test homepage');

const urlRoot = 'https://63778f6e81a568fc2519343a.mockapi.io'

function getData(){
    $.ajax({
        url: `${urlRoot}/Storemock`,
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            data = res;
            insertDatabase(data);
        }
    });



}

getData()

function insertDatabase(database) {
    htmlHome = '';
    for (const iterator of database) {
        htmlHome += 
        `
        <div class="col-xl-3 col-md-6 col-12 col__height p-2">
            <div class="card" style="width: 18rem;">
            <img src="${iterator.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${iterator.nameProduct}</h5>
                    <p class="card-text">${iterator.price}</p>
                    <a href="${iterator.link}" class="btn btn-primary">Buy Now</a>
                </div>
            </div> 
        </div>
        
        `
    } 
let dataUpdate = document.getElementById('postUpdate');
dataUpdate.innerHTML = htmlHome;
}