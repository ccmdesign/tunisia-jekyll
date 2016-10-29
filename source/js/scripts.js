$(document).ready(function () {
    
    $('.js-sub-bar-trigger').click(function () {
        $(this).parent().next().toggleClass('js-hidden');
        $(this).toggleClass('js-active');
    });
    
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