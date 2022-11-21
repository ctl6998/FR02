var ip = document.getElementById('input-data');
var op = document.getElementById('output-data');
console.dir(ip);

function lowerCase() {
    let lowerOutput = ip.value.toLowerCase();
    op.value = '';
    op.value += lowerOutput;
}

function upperCase() {
    let upperOutput = ip.value.toUpperCase();
    op.value = '';
    op.value += upperOutput;
}

function capitalizeCase() {
    op.value = '';
    let ipArr = ip.value.split(' ');
    for(var i=0; i < ipArr.length; i++) {
        if(ipArr[i]) {
        ipArr[i] = ipArr[i][0].toUpperCase() + ipArr[i].slice(1);
        };
    }
    var opArr = ipArr.join(' ');
    op.value += opArr;
}

function alternatingCase() {
    op.value = '';
    let ipArr = ip.value.toLowerCase().split(' ');
    for(var i=0; i < ipArr.length; i++) {
        ipArr[i] = ipArr[i].split('');
        for(var j=1; j < ipArr[i].length; j+=2) {
            ipArr[i][j] = ipArr[i][j].toUpperCase();
        }
        ipArr[i] = ipArr[i].join('');
    }
    var opArr = ipArr.join(' ');
    op.value += opArr;
}

function inverseCase() {
    op.value = '';
    let ipArr = ip.value.toLowerCase().split(' ').reverse();
    for(var i=0; i < ipArr.length; i++) {
        ipArr[i] = ipArr[i].split('').reverse();
        for(var j=1; j < ipArr[i].length; j+=2) {
            ipArr[i][j] = ipArr[i][j].toUpperCase();
        }
        ipArr[i] = ipArr[i].join('');
    }
    var opArr = ipArr.join(' ');
    op.value += opArr;
}

function copyClipboard() {
    op.select();
    op.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(op.value);
    alert("Copied text: " + op.value);
}


function clearText() {
    ip.value = '';
    op.value = '';
}