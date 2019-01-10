var $cube = $('.cube');
$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $cube.css('left', $cube.offset().left - 10);
        $cube.css('transform', 'rotate(-180deg)');
        break;
    case 38:
        $cube.css('top', $cube.offset().top - 10);
        $cube.css('transform', 'rotate(-90deg)');
        break;
    case 39:
        $cube.css('left', $cube.offset().left + 10);
        $cube.css('transform', 'rotate(0deg)');
        break;
    case 40:
        $cube.css('top', $cube.offset().top + 10);
        $cube.css('transform', 'rotate(90deg)');
        break;
    }
})
