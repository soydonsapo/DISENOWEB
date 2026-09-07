$(function () {
  const modal = new bootstrap.Modal('#albumModal');
  const descriptions = {
    'Tinta y Tiempo':'Una oda a la creación, al tiempo y a la biología de la atracción.',
    'Salvavidas de Hielo':'Un experimento acústico: todos los sonidos de este álbum nacen de guitarras.',
    'Bailar en la Cueva':'Una inmersión rítmica en el cuerpo, el baile y la raíz afrocaribeña.',
    'Amar la Trama':'Un concierto en directo que celebra el camino por encima del desenlace.',
    '12 Segundos de Oscuridad':'La luz vuelve siempre después de un instante de sombra.',
    'Eco':'El álbum que convirtió la física de Lavoisier en un himno emocional.',
    'Frontera':'Raíces uruguayas y nuevos sonidos reunidos en una misma orilla.'
  };
  $('.album-card').on('click', function () {
    const album = $(this).data('album');
    $('#albumTitle').text(album + ' · ' + $(this).data('year'));
    $('#albumDescription').text(descriptions[album]);
    $('#trackName').text($(this).data('song'));
    modal.show();
  });
  $('#trackPlay, .play').on('click', function () {
    const playing = $(this).hasClass('is-playing');
    $(this).toggleClass('is-playing', !playing).text(playing ? '▶' : 'Ⅱ');
    if ($(this).attr('id') === 'trackPlay') $('#trackState').text(playing ? '3:24' : 'Reproduciendo');
  });
  $('#newsletterForm').on('submit', function (event) { event.preventDefault(); $(this).addClass('d-none'); $('#formSuccess').removeClass('d-none'); });
  const $toTop = $('#toTop');
  $(window).on('scroll', function () {
    $toTop.toggle($(this).scrollTop() > 400);
    let current = 'inicio';
    $('main section[id]').each(function(){ if ($(window).scrollTop() >= $(this).offset().top - 125) current = this.id; });
    $('.nav-link').removeClass('active').filter('[href="#'+current+'"]').addClass('active');
  });
  $toTop.on('click', () => $('html, body').animate({scrollTop:0}, 550));
  $('.nav-link').on('click', function(){ $('.navbar-collapse').collapse('hide'); });
  $('.next').on('click', () => $('.video-track').animate({scrollLeft: '+=240'}, 300));
  $('.prev').on('click', () => $('.video-track').animate({scrollLeft: '-=240'}, 300));
});
