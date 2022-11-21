let box = document.getElementById('container');

var arr = [1,2,3,4]

var html = '';
var list = document.getElementById('list');
for (let i=0;i<arr.length;i++) {
    html += '<li>' + arr[i] +'</li>'
}

list.innerHTML = html;

/// forEach, for/in, for/of
/// for/in có thể duyệt qua element có key không phải số. Không dùng để duyệt mảng


for (const key in arr) {
    console.log(arr[key])
}

console.log("===============");

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])
}

