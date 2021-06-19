var arr = new Array();
for (let i=0; i < 10; i++) {
    arr[i] = +prompt('Input: ');
}

let text = "dãy array là: <br>";
for (let i=0; i<arr.length; i++) {
    text += arr[i] + "&ensp;";
}

let v = +prompt("number to check: ");
let kq=0;

for (let i = 0; i < 10; i++) {
    if (v == arr[i]) {
        kq = 1;
        arr.splice(i,1)
        arr.push('0');
        i--;
    }
}

if (kq) {
        text += "<br>dãy array mới là: <br>"
        for (let i=0; i<arr.length; i++) {
            text += arr[i] + "&ensp;";
        }
    }
else text += "<br>" + v + " is not in the array";
document.getElementById('result').innerHTML = (text);


//document.getElementById('result').innerHTML = 'dãy array là: <br>' + arr;