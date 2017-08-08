$(document).ready(function() {
    $('body').scrollspy({target: ".navbar", offset: 50});
    $('ul li').click(function(){

    var clicked_tab = $(this);

    clicked_tab.addClass('active');
    
    
    clicked_tab.parent().children('li').not(clicked_tab).removeClass('active');
    
});


});