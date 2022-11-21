/// Hàm input dữ liệu từ Local Storage
console.log('test');
var database = JSON.parse(localStorage.getItem('dataStorage'));

function insertDatabase(database) {
    htmlHome = '';
    for (const iterator of database) {
        htmlHome += 
        `
        <div class="col-xl-3 col-md-6 col-12 col__height p-2">
            <div class="card" style="width: 18rem;">
            <img src="${iterator.imgUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${iterator.title}</h5>
                    <p class="card-text">${iterator.desc}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> 
        </div>
        
        `
    } 
let dataUpdate = document.getElementById('postUpdate');
dataUpdate.innerHTML = htmlHome;
};
insertDatabase(database);