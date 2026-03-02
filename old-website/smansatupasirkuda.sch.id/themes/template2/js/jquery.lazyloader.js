/*
Plugin
*/
(function($) {

  $.fn.imageLazyloader = function(options) {
    var options = $.extend({}, $.fn.imageLazyloader.defaults, options),
      $lazy = $('.lazy'),
      images = new Array();

    function initialize() {

      // on copie les images dans un tableau de manière à gagner en performance (boucle au scrolling) en supprimant au fur et à mesure les éléments chargés
      for (var i = 0; i < $lazy.length; i++) {
        images.push($lazy[i]);
      }
      // Events
      $(window).scroll(scroll);
      // launch
      $(window).trigger('scroll');
    }

    function scroll() {
      var scrollBottom = $(this).scrollTop() + $(this).height();

      for (var i = 0; i < images.length; i++) {
        var $image = $(images[i]),
          image_offset_top = $image.offset().top - options.img_offset_subtraction;

        if (image_offset_top < scrollBottom) {

          // load image
          var url = $image.attr('data-src');
          loadImage(url);

          // suppression image chargée du tableau
          images.splice(i--, 1);
        }
      }
    }

    function loadImage(url) {
      var img = new Image();
      img.src = url;
      img.onerror = function() {
        options.onError('Error loading image: ' + url);
      };
      img.onload = function() {
        options.onUpdate(url);
      };
    }

    initialize();

    return this;
  }

  $.fn.imageLazyloader.defaults = {
    img_offset_subtraction: 0,
    onUpdate: function(url) {},
    onError: function(error) {}
  };

})(jQuery);

/*
Code 
*/
$(document).ready(function() {

  $.fn.imageLazyloader({
    img_offset_subtraction: 400,
    onUpdate: function(url) {

      var $img = $('img[data-src="' + url + '"]');
      if ($img != null) {
        $img.attr('src', url);
        // on peut faire une animation d'opacité si on veut
        $img.delay(50).animate({
          opacity: 1
        }, 1000);

        //console.log(url + ' chargée');
        $('.debug').append('<span>' + url + ' loaded</span><br>');
      }
    },
    onError: function(error) {
      console.log(error);
    }
  });

})