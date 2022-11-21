//// DOM
var container = document.getElementById('box');

//var div = document.getElementsByClassName('');
// Vì trả ra array nên có thể truy xuất tiếp bằng index:
// div[]

container.setAttribute('data','1');
container.innerText = '<h1>Text test</h1>';
container.innerHTML = '<h1>Text HTML</h1>';