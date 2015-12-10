/*
File:  http://zheondre.github.io/WebDesign/p9/js/ui.js
91.461 Assignment: Using the jQuery UI Slider and Tab Widgets
Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu
Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely 
copied or excerpted for educational purposes with credit to the author.
created by AC on 12/9/2015.
*/
//https://jqueryui.com/sortable/#empty-lists
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
	    //console.log( $(this) );
	    a = $(this);  
	}, 
	revert: "invalid",
	accept: "#sortable > li",
	activeClass: "ui-state-highlight",
	drop: function( event, ui ) {
	    drawCount++;
            deleteImage( ui.draggable );
	}
    });    
    function deleteImage( $item ) {
	colofletters = colofletters + $item.attr('class').split(' ')[0] ;
	console.log(colofletters );
	//console.log( $item.attr('class').split(' ')[0]);
	$item.fadeOut(function() {	     
	$item.appendTo( a ).fadeIn(function() {
		$item
		    .animate({ width: "60px", height:"60px" })
		    .find( "img" )
		    .animate({ height: "60px",width: "60px" });
            });
	});

	$("#ldropped").html( "Last letter " + 
			     $item.attr('class').split(' ')[0] + " dropped on cell " + a.attr('id') ) ; 
// calculates score 
	if( a.attr('class').split(' ')[1] == "x2w") { x2 = 1;}
	if( a.attr('class').split(' ')[1] == "x3w") { x3 = 1;}
	if( a.attr('class').split(' ')[1] == "x2l"){ 
	    crntRndScore = crntRndScore + 2*parseInt($item.attr('lvalue'));
	    totalScore = totalScore + 2*parseInt($item.attr('lvalue'));
	} else if( a.attr('class').split(' ')[1] == "x3l"){
	    crntRndScore = crntRndScore + 3 *  parseInt($item.attr('lvalue'));
            totalScore = totalScore + 3 * parseInt($item.attr('lvalue'));
	    //x3 = 1;
	} else { 
	    crntRndScore = crntRndScore + parseInt($item.attr('lvalue'));
            totalScore = totalScore+ parseInt($item.attr('lvalue'));
	} 

	$("#Score").html(totalScore);
	//console.log( crntRndScore);
	//console.log( $item.attr('lvalue'));
}  
// Last letter dropped is


});
