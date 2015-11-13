
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
    $( "#slider-range" ).slider({                                                                                              range: true,
        min: -100,
        max: 100,
        values: [ 0, 5 ],                                                                                                      slide: function( event, ui ) {                                                                                             var total = ui.values[1] - ui.values[0];                                                                               if( total > 10 || total < 0 ) {                                                                                            return false;                                                                                                      }
	    roi = ui.values[0];  rof = ui.values[1];// global call
            $( "#amount" ).val( ui.values[ 0 ] + " to " + ui.values[ 1 ] );
	    bldt(roi, rof, coi, cof);
        }                                                                                                                  });                                                                                                                    $( "#amount" ).val( " " + $( "#slider-range" ).slider( "values", 0 ) +                                                                     " to " + $( "#slider-range" ).slider( "values", 1 ) );                                             $( "#slider-range1" ).slider({                                                                                             range: true,                                                                                                           min: -100,                                                                                                             max: 100,                                                                                                              values: [ 0, 5 ],                                                                                                      slide: function( event, ui ) {                                                                                             var total = ui.values[1] - ui.values[0];                                                                                 
            if( total > 10 || total < 0) {                                                                                           
                return false;                                                                                                        
            }                                      
            coi = ui.values[0]; cof = ui.values[1];
            $( "#amount1" ).val( ui.values[ 0 ] + " to " + ui.values[ 1 ] ); 
	    bldt(roi, rof, coi, cof);
        }                                                                                                                            
    });                                                                                                                              
    $( "#amount1" ).val( " " + $( "#slider-range1" ).slider( "values", 0 ) +                                                         
                         " to " + $( "#slider-range1" ).slider( "values", 1 ) );
   });
