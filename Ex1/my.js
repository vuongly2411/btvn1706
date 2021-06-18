var arr = new Array();
for (let i=0; i < 10; i++) {
    arr[i] = +prompt('Input: ');
}
while (1) {
    let v = +prompt("number to check: ");
    let kq=0;
    for (let i=0; i<10; i++) {
        if (arr[i] == v) kq=1;
    }
    
    if (kq) alert(v + " is in the array");
    else alert(v + " is not in the array");
}


// let text = "dãy array là: ";

// for (let i=0; i<10; i++) {
//     text += arr[i] + " ";
// }

// document.getElementById('result').innerHTML = (text);