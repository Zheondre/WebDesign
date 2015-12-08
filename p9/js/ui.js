//https://jqueryui.com/sortable/#empty-lists
$(function() {
	$( "ul.droptrue" ).sortable({
		connectWith: "ul"
		    });
 
	$( "ul.dropfalse" ).sortable({
		connectWith: "ul",
		    dropOnEmpty: false
		    });
 
	$( "#sortable1, #sortable2, #sortable3" ).disableSelection();
    });