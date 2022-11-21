var ip1 = document.getElementById('data-1');
var ip2 = document.getElementById('data-2');
var ip3 = document.getElementById('print');
let container = document.getElementById('result');
console.dir(ip1);
console.log(typeof(ip1.value));

var arr = [12,4,5,6,2,8,9];
let text = arr.join('');
console.log(text);
ip3.innerHTML = text;

function getLog() {
    console.log('Sum is: ');
    let sum = Number(ip1.value) + Number(ip2.value);
    console.log(sum);
    container.innerHTML = sum;
}

