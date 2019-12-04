$("#SlideShow > div:gt(0)").hide();
    setInterval(function()
    { 
    $('#SlideShow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#SlideShow');
    },  3000);