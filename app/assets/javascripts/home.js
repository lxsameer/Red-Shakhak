//= require lib/masonry.pkgd
//= require lib/documentcloud/underscore
//= require lib/documentcloud/backbone-min
//= require router
//= require models

_.templateSettings = {
    interpolate: /\{\{\=(.+?)\}\}/g,
    evaluate: /\{\{(.+?)\}\}/g
};

$(function(){
    var $container = $('#adbox');

    $container.masonry({
	columnWidth: 150,
	gutter: 2,
	isOriginLeft: false,
	itemSelector: '.box'
    });

    $("#categorybtn").on("click", function(event){
        event.preventDefault();
        //document.drawer.close_drawer();
        document.drawer.load_remote_content({
            url: "/filter/categories",
            data: {}
        });
    });

    $("#filterbtn").on("click", function(event){
        event.preventDefault();
        //document.drawer.close_drawer();
        document.drawer.load_remote_content({
            url: "/filter/",
            data: {}
        });
    });


});
