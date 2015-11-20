/* 
   file:  https://github.com/Zheondre/WebDesign/blob/gh-pages/p8/js/driver.js
  91.461 Assignment: Using the jQuery Validation Plugin with Your Dynamic Table          
  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu                 
  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely              
  copied or excerpted for educational purposes with credit to the author.                
  updated by AC on November 11, 2015. 3:43 am.
   Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu                    
   Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely                 
   copied or excerpted for educational purposes with credit to the author.
*  Created 10/15/15
*/
function validin(){ 
    var f1 = document.getElementById('frm1').elements; 
    var ercount = 0;
    var f1 = document.getElementById('frm1').elements;
    // had to write my own required function since it would not fire when submit was hit before touchin\g any of the fields.  
	if( (f1[0].value === "") || (f1[1].value === "") || (f1[2].value === "")  || (f1[3].value === "")  \
	  ){
            if(f1[0].value === ""){
		$("#minrow").attr("class","error");
		$("#minrow").attr("aria-required","true");
		$("#minrow").attr("aria-invalid","true");
            }
            if(f1[1].value === ""){
		$("#maxrow").attr("class","error");
		$("#maxrow").attr("aria-required","true");
		$("#maxrow").attr("aria-invalid","true");
            }
            if(f1[2].value === ""){
		$("#mincol").attr("class","error");
		$("#mincol").attr("aria-required","true");
		$("#mincol").attr("aria-invalid","true");
            }
            if(f1[3].value === ""){
		$("#maxcol").attr("class","error");
		$("#maxcol").attr("aria-required","true");
		$("#maxcol").attr("aria-invalid","true");
            }
            document.getElementById("erm4").innerHTML = "A value is required for each field.";
	} else {
            $("#frm1 :text").each( function() {
		if($(this).attr("class") == "error") {
                    ercount++;
		}
            });
            if( ercount == 0 ) {
		bldt( f1[0].value, f1[1].value, f1[2].value, f1[3].value );
            }
	}   
// bldt( f1[0].value, f1[1].value, f1[2].value, f1[3].value );
}
// Build table
// Clear form values after submit button has been hit
function bldt(ri, rf, ci, cf) { 

    var th = "<th>", the = "</th>", rw = "<tr>", rwe = "</tr>", col = "<td>", colh = "</td>", ival = 0;
    var i, j, yo = "", fstrow = ri, fstcol = ci, rowfin = rf, colfin = cf;
    colfin++ ; rowfin++ ; fstcol-- ; fstrow-- ; 
   
    for (i = fstrow; i < rowfin; i++) {
	yo += rw;
	if ( i == fstrow ) {
	    yo += "<th class=\"hide\"></th>";
	} 
	else{ 
	    yo += th + i + the;
	}

	for (j = ci; j < colfin; j++) {
	    if(i != fstrow ) { 
		ival = i * j ;
		yo = yo + col + ival.toString() + colh;
	    }
	    else { 
		yo = yo + th + j + the;
	    }   
	}
	yo += rwe;
    }
    document.getElementById("tbl1").innerHTML = yo;
    //document.getElementById("frm1").reset(); 
}

