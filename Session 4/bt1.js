function Taxi(){
    var m = document.getElementById('nb').value;
    m = parseInt(m);
    if (m == 1) 
        document.getElementById('output').innerHTML = 15000;
    if (m <= 30) 
        document.getElementById('output').innerHTML = 12000*m;
    if (m > 30 ) 
        document.getElementById('output').innerHTML = 8000*m;
}
