// efecto ruido
var options = {
  "animate": true,
  "patternWidth": 445.16,
  "patternHeight": 445.16,
  "grainOpacity": 0.88,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}
grained('#noise', options);

// funciones
$('#home').on('mouseenter', '.btn-nav', function() {
  $('.btn-nav').removeClass('for-hover animated infinite flash');
  $(this).addClass('for-hover animated infinite flash');
})

$('#home').on('click', '.btn-nav', function() {
  $('nav').show()
})

$('.mi-menu').on('click', '.home', function(){
  $('nav').hide();
})

function animating(element, effect){
  $(element).addClass(`animated ${effect}`)
}

// ejecutar al cargar la página
$(document).ready(function() {
  $('nav').hide();
    $('#noise').delay(500).fadeOut();
    $('.content').hide().delay(1000).fadeIn()
    animating('#home .name', 'flipInX')
    animating('#home .home-nav', 'fadeIn')
    animating('#home hr', 'fadeIn')
    animating('#home .sup', 'flipInX')
    $('#pagepiling').pagepiling({
      menu: '.mi-menu',
      direction: 'horizontal',
      anchors: ['home','about', 'skills', 'quests', 'contact'],
      navigation: false,
      normalScrollElements: '#home, #about, #skills, #quests, #contact',
      verticalCentered: false
    });
    let location = window.location.href;
    if(location.indexOf('about') != -1 || location.indexOf('skills') != -1 || location.indexOf('quests') != -1 || location.indexOf('contact') != -1){
      $('nav').show()
    }
})



//while($('#home').css('transform') != 'matrix(1, 0, 0, 1, 0, 0)')