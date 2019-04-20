var SP = [
    {
        masp: 'IP_XS_Max',
        ten: 'Iphone XS Max Gray',
        pin: '3174 mAh, có sạc nhanh',
    },
    {
        masp: 'Oppo_A7',
        ten: 'Oppo A7 32Gb Gold',
        pin: '3174 mAh, có sạc nhanh',
    }
];


function getdata(sanpham){
    document.getElementById('sanpham_full').style.display = 'block';
    switch (sanpham) {
        case "IP_XS_Max":
            document.images['default'].src = "iphone-xs-max-gray.jpg";
            document.getElementById('name').innerHTML = "Iphone XS Max Gray";
            document.getElementById('pin').innerHTML = "3174 mAh, có sạc nhanh";
            document.getElementById('ram').innerHTML = "4 Gb";
            document.getElementById('rom').innerHTML = "64 Gb ";
            localStorage.Name = "IP_XS_Max";
            break;
        case "Oppo_A7":
            document.images['default'].src = "oppo-a7-32gb-gold.jpg";
            document.getElementById('name').innerHTML = "Oppo A7 32Gb Gold";
            document.getElementById('pin').innerHTML = "4230 mAh";
            document.getElementById('ram').innerHTML = "3 Gb";
            document.getElementById('rom').innerHTML = "32 Gb ";
            localStorage.Name = "Oppo_A7";
            break;
        case "SS_A9":
            document.images['default'].src = "samsung-galaxy-a9-2018-blue.jpg";
            document.getElementById('name').innerHTML = "Điện thoại Samsung Galaxy A9 (2018)";
            document.getElementById('pin').innerHTML = "3800 mAh, có sạc nhanh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "SS_A9";
            break;
        case "SS_A50":
            document.images['default'].src = "samsung-galaxy-a50-white.jpg";
            document.getElementById('name').innerHTML = "Samsung Galaxy A50 128GB";
            document.getElementById('pin').innerHTML = "4000 mAh";
            document.getElementById('ram').innerHTML = "6 Gb";
            document.getElementById('rom').innerHTML = "128 Gb ";
            localStorage.Name = "SS_A50";
            break;
    }
    localStorage['IP_XS_Max'] = '0';
    localStorage['Oppo_A7'] = '0';
    localStorage['SS_A9'] = '0';
    localStorage['SS_A50'] = '0';
}

function them_vao_gio(){
    localStorage[localStorage.Name] = parseInt(localStorage[localStorage.Name]) + parseInt(1);
}
function show(){
    localStorage.kq = '';
    if (localStorage.getItem('IP_XS_Max') > 0) 
        {
            localStorage.kq += "Iphone XS Max Gray <br> " + "Số lượng:" + localStorage['IP_XS_Max'] + " cái <br>";
        }
    if (localStorage.getItem('Oppo_A7') > 0) 
    {
        localStorage.kq += "Oppo A7 32Gb Gold <br> " + "Số lượng:" + localStorage['Oppo_A7'] + " cái <br>";
    }
    if (localStorage.getItem('SS_A9') > 0) 
    {
        localStorage.kq += "Samsung Galaxy A9 (2018) <br> " + "Số lượng:" + localStorage['SS_A9'] + " cái <br>";
    }
    if (localStorage.getItem('SS_A50') > 0) 
    {
        localStorage.kq += "Samsung Galaxy A50 128GB <br> " + "Số lượng:" + localStorage['SS_A50'] + " cái <br>";
    }
}
document.getElementById('output').innerHTML = localStorage.kq + localStorage.getItem('SP');
