function SoNgay(){
    var sn = 0;
    var d = new Date();
    var date = parseInt(document.getElementById('date').value);
    var month = parseInt(document.getElementById('month').value);
    var year = parseInt(document.getElementById('year').value);
    sn += songay_thang(month) - date+1;
        for (var j = month+1; j <= 12; j++){
            sn += songay_thang(j);
        }
    for (var i = year+1;i < d.getFullYear(); i++){
        if ((i % 4 == 0) & (i % 100 !=0)) 
            sn += 366;
        else
            sn += 365;
    }
    for (var i = 1; i <= d.getMonth(); i++){
        sn += songay_thang(i);
    }
    sn += d.getDate();
    document.getElementById('output').innerHTML = sn + " ngày";
}
var m;
function songay_thang(m){
    switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: return 31;break;
        case 2: 
        if ((year % 4 == 0) & (year % 100 !=0)) {
            return 29;
        }
        else {
            return 28;
        }
        break;
        case 4:
        case 6:
        case 9:
        case 11: return 30;
    }
}