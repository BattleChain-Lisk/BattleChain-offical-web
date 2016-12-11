// Carousel behaviour
$('.carousel.carousel-slider').carousel({full_width: true});

$('.icon-square').click(function(){
    $('.icon-square').removeClass('selected-icon');
    $(this).addClass('selected-icon');
})

$(document).ready(function(){
    
    var listIcons = $('.icon-square');
    var listIndicators = $('.indicator-item');
    
    for(var i=0, total=listIcons.length; i<total; i++){
        var indicator = listIndicators[i];
        $(listIcons[i]).bind('click', {'indicator':indicator}, function(event){
            var data = event.data;
            $(data.indicator).click();
        });
    }

})

$('.carousel.carousel-slider').on('slide', function (e) {
    console.log('slide event!');
});


$('#play-link').click(function(){
    $('.indicator-item')[0].click()
});
$('#bet-link').click(function(){
    $('.indicator-item')[1].click()
});
$('#grow-link').click(function(){
    $('.indicator-item')[2].click()
});
$('#clash-link').click(function(){
    $('.indicator-item')[3].click()
});