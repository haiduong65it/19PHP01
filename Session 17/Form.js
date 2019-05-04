$(document).ready(function(){
    $('#form').validate({
        rules: {
            name: {
                required: true
            },
            Address: {
                required: true
            },
            tel: {
                required: true
            },
            fdate: {
                required: true
            },
            ldate: {
                required: true
            },
            firstnumber: {
                required: true,
                min: true
            },
            lastnumber: {
                required: true,
                min: true
            },
        },
        messages: {
            name: {
                required: "Vui lòng nhập họ tên"
            },
            Address: {
                required: "Vui lòng nhập địa chỉ"
            },
            tel: {
                required: "Vui lòng nhập số điện thoại"
            },
            fdate: {
                required: "Vui lòng nhập ngày đầu kì"
            },
            ldate: {
                required: "Vui lòng nhập ngày cuối kì"
            },
            firstnumber: {
                required: "Vui lòng nhập số đầu kì",
                min: "vui lòng nhập số lớn hơn 0"
                
            },
            lastnumber: {
                required: "Vui lòng nhập số cuối kì",
                min: "vui lòng nhập số lớn hơn 0"
            }
        }
    });
});
$('#lastdate').on('change',function(){
    var fDate = $('#firstdate').val();
    var lDate = $('#lastdate').val();
    
    if (fDate > lDate){
        alert("Ngày cuối kì phải lớn hơn ngày đầu kì");
    } 
});
$('#lastnumber').on('change',function(){
    var fnum = parseInt($('#firstnumber').val());
    var lnum = parseInt($('#lastnumber').val());

    if (lnum < fnum){
        alert("Số cuối kỳ phải lớn hơn số đầu kỳ");
    }
})
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
$('#submit').click(function(){
        var fnum = parseInt($('#firstnumber').val());
        var lnum = parseInt($('#lastnumber').val());
        var tt = 0;
        if ((lnum - fnum) < 100) 
            tt = 1500 * (lnum - fnum);
        else if ((lnum - fnum) < 300)
            tt = 1500 * 100 + 2000 * (lnum - fnum - 100);
        else 
            tt = 1500 * 100 + 2000 * (lnum - fnum - 100) + 3000 * (lnum - fnum - 300);
        $('#hoadon').css('display', 'block');
        document.getElementById('hd-name').innerHTML = $('#name').val();
        document.getElementById('hd-addr').innerHTML = $('#address').val();
        document.getElementById('hd-tel').innerHTML = $('#tel').val();
        document.getElementById('hd-fdate').innerHTML = $('#firstdate').val();
        document.getElementById('hd-ldate').innerHTML = $('#lastdate').val();
        document.getElementById('hd-fnum').innerHTML = $('#firstnumber').val();
        document.getElementById('hd-lnum').innerHTML = $('#lastnumber').val();
        document.getElementById('hd-note').innerHTML = $('#note').val();
        if (($('#firstnumber').val() != "") & ($('#lastnumber').val() != ""))
            document.getElementById('hd-total').innerHTML = formatNumber(tt)+" VNĐ";
        $('#form').submit();
});