/* 
   file:  https://github.com/Zheondre/WebDesign/blob/gh-pages/p7/js/driver.js

   91.461 Assignment: Using the jQuery Validation Plugin with Your Dynamic Table             
   Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu                    
   Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely                 
   copied or excerpted for educational purposes with credit to the author.
*  Created 10/15/15
*  Tutorials 
*  http://pietschsoft.com/post/2006/06/01/Javascript-Loop-through-all-elements-in-a-form
*/

function validin(){ 
    var f1 = document.getElementById('frm1').elements; 
    if( (f1[0].value === "") || (f1[1].value === "") || (f1[2].value === "")  || (f1[3].value === "")  ){ 
	document.getElementById("tbl1").innerHTML = "";
	return false;
    }
    else { 
	colrow( f1[0].value, f1[1].value, f1[2].value, f1[3].value );
    }
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

//Place smaller value in appropriate variables.
function colrow(ri, rf, ci, cf){ 
    var temp = 0;
    if( ci > cf ){ 
	temp = cf; 
	cf = ci; 
	ci = temp; 
    } 
    if( ri > rf ){ 
	temp = rf; 
	rf = ri; 
	ri = temp;
    }
    if ( rf - ri > 10 ) { 
	return window.alert("Row range can not exceed ten.");
    } 
    if ( cf - ci > 10 ) {
	return window.alert("Column range can not exceed ten.");
    }
    bldt(ri, rf, ci, cf);
}
