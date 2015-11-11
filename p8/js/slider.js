$(function() {
    $( "#slider-range" ).slider({
	range: true,
	min: -10,
	max: 10,
	values: [ 0, 5 ],
	slide: function( event, ui ) {
	    var total = ui.values[1] - ui.values[0];
	    if( total > 10 || total < 0 ) { 
		return false; 
	    } 
            $( "#amount" ).val( ui.values[ 0 ] + " to " + ui.values[ 1 ] );
	}
    });
    $( "#amount" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +
			" to " + $( "#slider-range" ).slider( "values", 1 ) );
    $( "#slider-range1" ).slider({
        range: true,
        min: -10,
        max: 10,
        values: [ 0, 5 ],
        slide: function( event, ui ) {
            var total = ui.values[1] - ui.values[0];
            if( total >10 || total < 0) {
                return false;
            }
            $( "#amount1" ).val( ui.values[ 0 ] + " to " + ui.values[ 1 ] );
        }
    });
    $( "#amount1" ).val( " " + $( "#slider-range1" ).slider( "values", 0 ) +
                        " to " + $( "#slider-range1" ).slider( "values", 1 ) );
});
