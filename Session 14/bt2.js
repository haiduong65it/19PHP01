var t = 2000;
var d = 0;
var k = 200;

while (t >= 200){
    d += t / k;
    t = (d / 2) * 200;
}
document.write(d);