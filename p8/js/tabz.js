/*
  File:  http://zheondre.github.io/WebDesign/p8/js/tabs.js

  91.461 Assignment: Using the jQuery UI Slider and Tab Widgets          
  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu                 
  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely              
  copied or excerpted for educational purposes with credit to the author.                
  updated by AC on November 19, 2015. 3:43 am.
*/
// http://jqueryui.com/tabs/#manipulation
$(function() {
    $( "#tabs" ).tabs();
});
$(function() {
   
    var tabTitle = "test",
    tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
    tabCounter = 2;
    var tabs = $( "#tabs" ).tabs();
    // actual addTab function: adds new tab using the input from the form above
    function addTab( tabContent ) {
	var label = tabTitle,
        id = "tabs-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) );
	tabs.find( ".ui-tabs-nav" ).append( li );
	tabs.append("<div id='" + id + "'>"+ tabContent+"</div>");
	//console.log(tabs);
	tabs.tabs( "refresh" );
	tabCounter++;
    }
    $( "#add_tab" ).button().click(function() {
//if there is an error dont call addTab ? 
	addTab(  $("#tdef" ).html());
	event.preventDefault();
	roi = coi = 0;
	rof = cof = 2;
	$( "#minrow" ).val( 0 );
        $( "#maxrow" ).val( 2 );
	$( "#mincol" ).val( 0 );
        $( "#maxcol" ).val( 2 );
	$("#slider-range").slider("values",0, 0);
	$("#slider-range").slider("values",1, 2);
	$("#slider-range1").slider("values",0, 0) ;
	$("#slider-range1").slider("values",1, 2) ;
	bldt(roi, rof, coi, cof);
	});
    // close icon: removing the tab on click
   tabs.delegate( "span.ui-icon-close", "click", function() {
	var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );

       console.log($(this))
       //console.log( panelId); 	
$( "#" + panelId ).remove();
	tabs.tabs( "refresh" );
    });
    var multabsdel = [];
    tabs.delegate( "span", "click", function(event) {
        //console.log($(this));
	if(event.shiftKey) {
	    //console.log($(this).attr( "aria-controls" ));
	    $( this ).addClass("HLT")
	    multabsdel.push( $( this ) ) ;
	    console.log(multabsdel); 
	}
//	    tabs.tabs( "refresh" );
    })
    $( "#delete_tabs" ).button().click(function() {
	//$("#"+multabsdel).remove();
	if( multabsdel.length == 0) { 
	    return false ;
	} else { 
	    $//.each( multabsdel, function(){
	    console.log("del"); 
	    $(this).remove();
	    tabs.tabs( "refresh" );
	   }
    }); 

});
