//https://jqueryui.com/sortable/#empty-lists
/*$(function() {
	$( "ul.droptrue" ).sortable({
		connectWith: "ul"
		    });
 
	$( "ul.dropfalse" ).sortable({
		connectWith: "ul",
		    dropOnEmpty: false
		    });
 
	$( "#sortable1, #sortable2, #sortable3" ).disableSelection();
    });*/
$(function() {
        $( "#sortable" ).sortable({
            //revert: false                                                                
        });
        $( "#draggable" ).draggable({
            connectToSortable: "#sortable",
            helper: "clone"//,
//revert: "invalid"
});
        $( "ul, li" ).disableSelection();
    });

$(function() {
    $("td").droppable({
	over:function( e, u ) { 
	    console.log( $(this) );
	    a = $(this);  
	}, 
	accept: "#sortable > li",
	activeClass: "ui-state-highlight",
	drop: function( event, ui ) {
            deleteImage( ui.draggable );
	}
    });
    
    function deleteImage( $item ) {
	console.log( $item ) 
	$item.fadeOut(function() {
	    
	    
	    $item.appendTo( a ).fadeIn(function() {
          $item
		    .animate({ width: "60px", height:"60px" })
		    .find( "img" )
		    .animate({ height: "60px",width: "60px" });
            });
	});
    }  



});
