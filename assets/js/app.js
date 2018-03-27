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


// nav
let about = '<div class="nav on-about"><ul class="section-info"><li class="in-section"><span data-future="about">Biografía</span> <div class="circle"></div></li><li class="decoration"><div class="circle"></div><div class="circle"></div><div class="circle"></div></li></ul><ul class="mi-menu"><li><a data-menuanchor="skills" href="#skills" class="skills">Habilidades</a></li><li><a data-menuanchor="quests" href="#quests" class="quests">Misiones</a></li><li><a data-menuanchor="contact" href="#contact" class="contact">Contacto</a></li><li><a data-menuanchor="home" href="#home" class="home"><i class="fas fa-times-circle"></i></a></li></ul></div>';

let skills = '<div class="nav on-skills"><ul class="section-info"><li class="in-section"><span data-future="skills">Habilidades</span> <div class="circle"></div></li><li class="decoration"><div class="circle"></div><div class="circle"></div><div class="circle"></div></li></ul><ul class="mi-menu"><li><a data-menuanchor="about" href="#about" class="about">Biografía</a></li><li><a data-menuanchor="quests" href="#quests" class="quests">Misiones</a></li><li><a data-menuanchor="contact" href="#contact" class="contact">Contacto</a></li><li><a data-menuanchor="home" href="#home" class="home"><i class="fas fa-times-circle"></i></a></li></ul></div>';

let quests = '<div class="nav on-quests"><ul class="section-info"><li class="in-section"><span data-future="quests">Misiones</span> <div class="circle"></div></li><li class="decoration"><div class="circle"></div><div class="circle"></div><div class="circle"></div></li></ul><ul class="mi-menu"><li><a data-menuanchor="about" href="#about" class="about">Biografía</a></li><li><a data-menuanchor="skills" href="#skills" class="skills">Habilidades</a></li><li><a data-menuanchor="contact" href="#contact" class="contact">Contacto</a></li><li><a data-menuanchor="home" href="#home" class="home"><i class="fas fa-times-circle"></i></a></li></ul></div>';

let contact = '<div class="nav on-contact"><ul class="section-info"><li class="in-section"><span data-future="contact">Contacto</span> <div class="circle"></div></li><li class="decoration"><div class="circle"></div><div class="circle"></div><div class="circle"></div></li></ul><ul class="mi-menu"><li><a data-menuanchor="about" href="#about" class="about">Biografía</a></li><li><a data-menuanchor="skills" href="#skills" class="skills">Habilidades</a></li><li><a data-menuanchor="quests" href="#quests" class="quests">Misiones</a></li><li><a data-menuanchor="home" href="#home" class="home"><i class="fas fa-times-circle"></i></a></li></ul></div>';

const navObj = {
  about,
  skills,
  quests,
  contact
}


// funciones
// hover menú inicial
$('#home').on('mouseenter', '.btn-nav', function() {
  $('.btn-nav').removeClass('for-hover animated infinite flash');
  $(this).addClass('for-hover animated infinite flash');
})

//click a botón menú inicial
$('#home').on('click', '.btn-nav', function() {
  $('nav').show()
})

// click a X
$('.mi-menu').on('click', '.home', function(){
  $('nav').hide();
})

// click a un botón del nav
$('nav').on('click', 'li a', function() {
  let anchor = $(this).attr('data-menuanchor')
  let newContent = navObj[anchor];
  //console.log(newContent)
  $('nav').html(newContent);
  if ($(this).attr('data-menuanchor') === 'home') {
    $('nav').hide()
  }
})
// home nav
$('.home-nav').on('click', 'li a', function() {
  let anchor = $(this).attr('data-menuanchor')
  let newContent = navObj[anchor];
  //console.log(newContent)
  $('nav').html(newContent);
  if ($(this).attr('data-menuanchor') === 'home') {
    $('nav').hide()
  }
})

// para efectos más acotado
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
    let loc = window.location.href;
    if(loc.indexOf('about') != -1 || loc.indexOf('skills') != -1 || loc.indexOf('quests') != -1 || loc.indexOf('contact') != -1){
      let wordLoc = loc.split('#')[1]
      $('nav').html(navObj[wordLoc])
      $('nav').show()
    }
})