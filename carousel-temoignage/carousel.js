$('#carouselThematique').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselThematique .carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselThematique .carousel-item').eq(i).appendTo('#carouselThematique .carousel-inner');
            }
            else {
                $('#carouselThematique .carousel-item').eq(0).appendTo('#carouselThematique .carousel-inner');
            }
        }
    }
});

$('#carouselTemoignage').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 3;
    var totalItems = $('#carouselTemoignage .carousel-item').length;

    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('#carouselTemoignage .carousel-item').eq(i).appendTo('#carouselTemoignage .carousel-inner');
            }
            else {
                $('#carouselTemoignage .carousel-item').eq(0).appendTo('#carouselTemoignage .carousel-inner');
            }
        }
    }
});
