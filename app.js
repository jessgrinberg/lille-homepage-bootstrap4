
(function(){

  $('#carousel123').carousel({ interval: 2000 });
}());
//
// (function(){
//   $('.carousel-showthreemoveone .carousel-item').each(function(){
//     var itemToClone = $(this);
//
//     for (var i=1;i<3;i++) {
//       itemToClone = itemToClone.next();
//
//       // wrap around if at end of item collection
//       if (!itemToClone.length) {
//         itemToClone = $(this).siblings(':first');
//       }
//
//       // grab item, clone, add marker class, add to collection
//       itemToClone.children(':first-child').clone()
//         .addClass("cloneditem-"+(i))
//         .appendTo($(this));
//     }
//   });
// }());
//
// $('#recipeCarousel').carousel({
//   interval: 10000
// })

// $('.recipeCarousel.carousel .carousel-item').each(function(){
//     var next = $(this).next();
//     if (!next.length) {
//     next = $(this).siblings(':first');
//     }
//     next.children(':first-child').clone().appendTo($(this));
//
//     for (var i=0;i<2;i++) {
//         next=next.next();
//         if (!next.length) {
//         	next = $(this).siblings(':first');
//       	}
//
//         next.children(':first-child').clone().appendTo($(this));
//       }
// });
