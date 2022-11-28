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

let html = 'Lenguaje de marcado que se utiliza para el desarrollo web. Última versión de HTML. Manejo de etiquetas, estructura y atributos.';

let css = 'Hojas de Estilo en Cascada. CSS es un lenguaje, se utiliza para definir el estilo o la apariencia de las páginas web, escritas con HTML. Diseño, animaciones, grilla, responsive.'

let js = 'Lenguaje de programación. Enfocado en darle dinamismo a la página web; desarrollo de funciones, ES6, manejo de DOM, llamadas a API';

let jquery = 'Librería de JavaScript que permite simplificar la manera de interactuar con los documentos HTML, manipulación de DOM, manejo de eventos, desarrollo de animaciones y agregar interacción con la técnica AJAX a páginas web';

let git = 'Software de control de versiones. Administración de ramas, manipulación de commits, actualización, edición, uso colaborativo';

let github = 'Plataforma de desarrollo colaborativo utilizada para alojar proyectos utilizando el sistema de control de versiones Git.';

let react = 'Librería de JavaScript de código abierto, utilizaza para la creación de Single Page Application. Manejo de componentes.';

let npm = 'Node Package Manager. Gestor de paquetes JavaScript de NODE.JS, administrador de dependencias.';

let bootstrap = 'Framwork de código abierto. Facilitador del diseño y estructura web, material responsive.';

let mongodb = 'Sistema de base de datos NoSQL orientado a documentos de código abierto y escrito en C++ que ofrece una gran escalabilidad y flexibilidad, así como un modelo de consultas e indexación avanzado.';

const skillsObj = {
  html,
  css,
  js,
  jquery,
  git,
  github,
  react,
  mongodb,
  npm,
  bootstrap,
  htmlIcon: '<i class="devicon-html5-plain colored"></i>',
  cssIcon: '<i class="devicon-css3-plain colored"></i>',
  jsIcon: '<i class="devicon-javascript-plain colored">',
  jqueryIcon: '<i class="devicon-jquery-plain colored"></i>',
  gitIcon: '<i class="devicon-git-plain colored"></i>',
  githubIcon: '<i class="devicon-github-plain colored "></i>',
  reactIcon: '<i class="devicon-react-original colored"></i>',
  mongodbIcon: '<i class="devicon-mongodb-plain-wordmark colored"></i>',
  npmIcon: '<i class="fab fa-npm"></i>',
  bootstrapIcon: '<i class="devicon-bootstrap-plain colored"></i>'
}
// funciones
// hover menú inicial
$('#home').on('mouseenter', '.btn-nav', function() {
  $('.btn-nav').removeClass('for-hover animated infinite flash');
  $(this).addClass('for-hover animated infinite flash');
})
//hover en skills
$('#skills').on('mouseenter', '.icon', function() {
  $('#skills .icon').removeClass('active-icon animated infinite flash');
  $(this).addClass('active-icon animated infinite flash');
  let id = $(this).attr('id');
  let text = skillsObj[id];
  let icon = skillsObj[`${id}Icon`];
  $('#skills .skill-info-container .skill-info-title').html(id);
  $('#skills .skill-info-container .skill-info-text').html(text);
  $('#skills .skill-info-container .skill-icon-container').html(icon)
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
  console.log($(this).attr('data-menuanchor'));
  if ($(this).attr('data-menuanchor') === 'home') {
    $('nav').hide();
  }
})

// para efectos más acotado
function animating(element, effect){
  $(element).addClass(`animated ${effect}`)
}

// ejecutar al cargar la página
$(document).ready(function() {
    //$('nav').hide();
    $('#noise').delay(600).fadeOut();
    $('.content').hide().delay(1200).fadeIn();
    animating('#home .name', 'flipInX');
    animating('#home .home-nav', 'fadeIn');
    animating('#home hr', 'fadeIn');
    animating('#home .sup', 'flipInX');
    $('#pagepiling').pagepiling({
      menu: '.mi-menu',
      direction: 'horizontal',
      anchors: ['home','about', 'skills', 'quests', 'contact'],
      navigation: false,
      normalScrollElements: '#home, #about, #skills, #quests, #contact',
      verticalCentered: false,
      keyboardScrolling: false
    });
      $('[data-toggle="tooltip"]').tooltip()
    $('img').tooltip(options)
    let loc = window.location.href;
    if(loc.indexOf('about') != -1 || loc.indexOf('skills') != -1 || loc.indexOf('quests') != -1 || loc.indexOf('contact') != -1){
      let wordLoc = loc.split('#')[1]
      $('nav').html(navObj[wordLoc])
      $('nav').show()
    }
    if (screen.width < 720) {
      $('.section').addClass('pp-scrollable');
    }
})

// JavaScript
window.sr = ScrollReveal({reset: true});
sr.reveal('#skills li');
sr.reveal('.bar');