// load  masonry.js grid
var grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});

// when images are loaded arrange according to masonry grid
grid.imagesLoaded().progress(function() {
  grid.masonry();
});
