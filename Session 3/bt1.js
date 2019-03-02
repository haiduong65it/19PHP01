var n = 100;
var i = 1;
var t = 100;
while (i < 5)
{
    t += n*0.4*2;
    i ++;
    n = n*0.4;
}
document.write("Quả bóng đi được quãng đường là: " + t);