var myArray = [];
console.log( typeof myArray);

var myArray2 = ['Nam','Trung','Hai','Tuan'];
console.log(myArray2[0]);

console.log(myArray2[2]);

console.log(myArray2.length);

for (var i = 0; i < myArray2.length; i++){
    document.write('<p>' + myArray2[i] + '</p>');
}
document.write('<br>---');

var myArray3 = [5, 4, 9, 12, 78, 4, 4, 6, 2];
for (var i = 0; i < myArray3.length- 1; i++){
    for (var j = i + 1; j < myArray3.length; j++){
        if (myArray3[i] > myArray3[j]) {
            var tam = myArray3[i];
            myArray3[i] = myArray3[j];
            myArray3[j] = tam;
        }
    }
}
for (var i = 0; i < myArray3.length; i++){
    document.write('<p>' + myArray3[i] + '</p>');
}
