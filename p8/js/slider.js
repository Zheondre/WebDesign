//http://stackoverflow.com/questions/12795307/jquery-ui-slider-change-value-of-slider-when-changed-in-input-field
$.getScript("js/driver.js", function(){
    //alert("Script loaded but not necessarily executed.");
});
$(function() {
    $( "#tabs" ).tabs();
});

$(function() {
    roi = coi = 0;
    rof = cof = 5;
    bldt(roi, rof, coi, cof);
    maxL = 20;
    lowL = 0 ; 
    $( "#slider-range" ).slider({
	range: true,
	min: -30,
	max: 30,
	values: [ 0, 5 ],

	slide: function( event, ui ) {
	    var total = ui.values[1] - ui.values[0]; 
	    if( total > maxL || total < lowL ) {
		return false;
            }
	    roi = ui.values[0];  rof = ui.values[1];// global call
            $( "#amount" ).val( ui.values[ 0 ] );
	    $( "#amountMr" ).val( ui.values[ 1 ] );
	    bldt(roi, rof, coi, cof);
        }
    });
  
    $("#amount").keyup(function() {
        var n = parseInt($("#amount").val()) ;
        if( !isNaN(n) ) {
	    roi = n;
	    if ( rof - roi > maxL || rof - roi < lowL){ 
		return false; 
	    }
	    $("#slider-range").slider("values",0, n) ;   	    
	    bldt(roi, rof, coi, cof);
	}
    });
    $("#amountMr").keyup(function() {
        var n = parseInt($("#amountMr").val()) ;
        if( !isNaN(n) ) {
            rof = n;
	    if ( rof - roi > maxL || rof - roi < lowL){
                return false;
            }
	    $("#slider-range").slider("values",1, n) ;
            bldt(roi, rof, coi, cof);
	}
    });
    $("#amount1").keyup(function() {
        var n = parseInt($("#amount1").val()) ;
        if( !isNaN(n) ) {
            coi = n;
	    if ( cof - coi > maxL || cof - coi < lowL){
                return false;
            }
	    $("#slider-range1").slider("values",0, n) ;
            bldt(roi, rof, coi, cof);

	}
    });
    $("#amount1Mr").keyup(function() {
        var n = parseInt($("#amount1Mr").val()) ;
        if( !isNaN(n) ) {
            cof = n;
	    if ( cof - coi > maxL || cof - coi < lowL){
                return false;
            }
	    $("#slider-range1").slider("values",1, n) ;
            bldt(roi, rof, coi, cof);
	}
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amountMr" ).val( $( "#slider-range" ).slider( "values", 1 ) );
   
    $( "#slider-range1" ).slider({ 
	range: true,
	min: -30,
	max: 30, 
	values: [ 0, 5 ],
	slide: function( event, ui ) {
	    var total = ui.values[1] - ui.values[0];
	    if( total > 15 || total < 0) {
		return false;
	    }
	    coi = ui.values[0];
	    cof = ui.values[1];
	    $( "#amount1" ).val( ui.values[ 0 ] );
	    $( "#amount1Mr" ).val( ui.values[ 1 ] );
	    bldt(roi, rof, coi, cof);
	}
    });
    $( "#amount1" ).val( $( "#slider-range" ).slider( "values", 0 ));
    $( "#amount1Mr" ).val( $( "#slider-range" ).slider( "values", 1 ) );

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

