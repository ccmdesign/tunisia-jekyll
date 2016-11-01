$(document).ready(function () {
    
    $('.js-sub-bar-trigger').click(function () {
        $(this).parent().next().toggleClass('js-hidden');
        $(this).toggleClass('js-active');
    });

    var cmo_status = false;
    $('.js-cmo-trigger').click(function () {
        var cmo = $(this);
        var cmo_n = cmo.attr('data-cmo');
        var cmo_boxes = $('.js-cmo-explanation');

        if (cmo_status) {
          cmo_boxes.removeClass('js-active');
          cmo_status = false;
        } else {
          cmo_boxes.removeClass('js-active');
          $('.js-cmo-' + cmo_n).addClass('js-active');
          cmo_status = true;
        };
        // console.log(cmo_status);
    });

    $('.js-show-full-ranking').click(function () {
      $('.ranking').removeClass('ranking--collapsed');
      $(this).hide();
    });
        

    // Initializing list.js
    var options = {
        valueNames: [
          'list-position',
          'list-name',
          'list-cmo',
          'list-governance',
          'list-gestion',
          'list-perenity',
          'list-score'
        ]
      }

      var cityList = new List('city-list', options);



}); // doc.ready


// Smooth Scrolling Function
// $('a[href*=#]:not([href=#])').click(function () {
//     var $targ = $(this.hash),
//         host1 = this.hostname,
//         host2 = location.hostname,
//         path1 = this.pathname.replace(/^\//, ''),
//         path2 = location.pathname.replace(/^\//, '');

//     if (!$targ.length) {
//         $targ = $('[name=' + this.hash.slice(1) + ']');
//     }

//     if ($targ.length && (host1 === host2 || path1 === path2)) {
//         $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

//         return false;
//     }

//     return true;
// });