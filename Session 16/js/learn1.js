$('.run').click(function(){
    $('.img').animate({'left': '80%'}, 'slow');
})
$('.rerun').click(function(){
    $('.img').css({'transform': 'rotateY(180deg)'});
    $('.img').animate({'right': '80%'}, 'slow');
});