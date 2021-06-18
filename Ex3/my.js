var arr = new Array();
for (let i=0; i < 10; i++) {
    arr[i] = +prompt('Input: ');
}

let text = "dãy array là: <br>";
for (let i=0; i<arr.length; i++) {
    text += arr[i] + "&ensp;";
}
// arr.sort(function(a,b) {
//     return a-b;
// });
// arr.reverse();
for (let i=0; i<arr.length-1; i++) {
    for (let j=i; j<arr.length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}
text += "<br>dãy array sau khi sắp xếp là: <br>"
for (let i=0; i<arr.length; i++) {
    text += arr[i] + "&ensp;";
}
document.getElementById('result').innerHTML = (text);


