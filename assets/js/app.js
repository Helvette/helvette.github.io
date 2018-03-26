var options = {
  "animate": true,
  "patternWidth": 263.08,
  "patternHeight": 100,
  "grainOpacity": 0.52,
  "grainDensity": 1.62,
  "grainWidth": 1,
  "grainHeight": 1
}

grained('#noise', options);


setTimeout(function(){ $('#noise').hide() }, 1000);

//$('#noise').delay(800).fadeOut();
$('.content').hide().delay(790).show();
$('#home').on('mouseenter', '.btn-nav', function() {
  $('.btn-nav').removeClass('for-hover animated infinite flash');
  $(this).addClass('for-hover animated infinite flash');
})