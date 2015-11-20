/*
  File:  http://zheondre.github.io/WebDesign/p8/js/slider.js                     
            
  91.461 Assignment: Using the jQuery UI Slider and Tab Widgets          
  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu                 
  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely              
  copied or excerpted for educational purposes with credit to the author.                
  updated by AC on November 19, 2015. 3:43 am.
*/
//http://stackoverflow.com/questions/12795307/jquery-ui-slider-change-value-of-slider-when-changed-in-input-field
$.getScript("js/driver.js", function(){
    //alert("Script loaded but not necessarily executed.");
});
$(function() {
    $( "#tabs" ).tabs();
});

$(function() {
    roi = coi = 0;
    rof = cof = 2;
    bldt(roi, rof, coi, cof);
    maxL = 9;
    lowL = 0 ; 
    $( "#slider-range" ).slider({
	range: true,
	min: -30,
	max: 30,
	values: [ 0, 2 ],

	slide: function( event, ui ) {
	    var total = ui.values[1] - ui.values[0]; 
/*// sliding the entire range, look after all functions are properly working. 	    
	    if( total > maxL ) {
		$("#slider-range").slider("values",0,ui.values[0] +1 ) ;	 
		$("#slider-range").slider("values",1,ui.values[1] -1 ) ;
	    }*/
	    if( total > maxL || total < lowL ) {
		return false;
            }
	    roi = ui.values[0];  rof = ui.values[1];// global call
            $( "#minrow" ).val( ui.values[ 0 ] );
	    $( "#maxrow" ).val( ui.values[ 1 ] );
	    bldt(roi, rof, coi, cof);
        }
    });
  
    $("#minrow").keyup(function() {
        var n = parseInt($("#minrow").val()) ;
 
if( !isNaN(n) ) {
	    roi = n;
    console.log(rof - roi);
	    if ( rof - roi > maxL || rof - roi < lowL){ 
		return false; 
	    }
	    $("#slider-range").slider("values",0, n) ;   	    
	    bldt(roi, rof, coi, cof);
	}
    });
    $("#maxrow").keyup(function() {
        var n = parseInt($("#maxrow").val()) ;
        if( !isNaN(n) ) {
            rof = n;
	    console.log(rof - roi);
	    if ( rof - roi > maxL || rof - roi < lowL){
                return false;
            }
	    $("#slider-range").slider("values",1, n) ;
            bldt(roi, rof, coi, cof);
	}
    });
    $("#mincol").keyup(function() {
        var n = parseInt($("#mincol").val()) ;
        if( !isNaN(n) ) {
            coi = n;
	    if ( cof - coi > maxL || cof - coi < lowL){
                return false;
            }
	    $("#slider-range1").slider("values",0, n) ;
            bldt(roi, rof, coi, cof);

	}
    });
    $("#maxcol").keyup(function() {
        var n = parseInt($("#maxcol").val()) ;
        if( !isNaN(n) ) {
            cof = n;
	    if ( cof - coi > maxL || cof - coi < lowL){
                return false;
            }
	    $("#slider-range1").slider("values",1, n) ;
            bldt(roi, rof, coi, cof);
	}
    });
    $( "#minrow" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#maxrow" ).val( $( "#slider-range" ).slider( "values", 1 ) );
   
    $( "#slider-range1" ).slider({ 
	range: true,
	min: -30,
	max: 30, 
	values: [ 0, 2 ],
	slide: function( event, ui ) {
	    var total = ui.values[1] - ui.values[0];
	    /*if( total > maxL ) {
                $("#slider-range1").slider("values",0,ui.values[0] +1 ) ;
                $("#slider-range1").slider("values",1,ui.values[1] -1 ) ;
	    }*/
	    if( total > maxL || total < lowL) {
		return false;
	    }
	    coi = ui.values[0];
	    cof = ui.values[1];
	    $( "#mincol" ).val( ui.values[ 0 ] );
	    $( "#maxcol" ).val( ui.values[ 1 ] );
	    bldt(roi, rof, coi, cof);
	}
    });
    $( "#mincol" ).val( $( "#slider-range1" ).slider( "values", 0 ));
    $( "#maxcol" ).val( $( "#slider-range1" ).slider( "values", 1 ) );

    $("#slider").slider({
	range: "min",
	value: 1,
	step: 1,
	min: 0,
	max: 100,
	slide: function (event, ui) {
            $("input").val(ui.value);
	}
    });
    $("input").on("keyup",function(e){
	$("#slider").slider("value",this.value);
    });
});

