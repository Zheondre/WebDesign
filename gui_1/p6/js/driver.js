/* Angel Calcano
*  js functions for assignment 6
*  Created 10/15/15
*  Tutorials 
*  http://pietschsoft.com/post/2006/06/01/Javascript-Loop-through-all-elements-in-a-form
* Only numbers are allowed for input
* http://stackoverflow.com/questions/7295843/allow-only-numbers-to-be-typed-in-a-textbox
*/

// Tried fading the table in and out, doesn't work. 
$(document).ready(function(){
    $("button").click(function(){
   
        $("#tbl1").fadeToggle(1000);
       // $("#div3").fadeToggle(3000);
    });
});

/* Only positive numbers are allowed in the input                                   
*  Check for duplicate numbers in row or col                                        
*  Check for empty input.                                                           
*/
function validin(){ 
    var f1 = document.getElementById('frm1').elements; 

    if( (f1[0].value > 10) || (f1[1].value > 10) || (f1[2].value > 10 )  || (f1[3].value > 10 )  ){
	document.getElementById("tbl1").innerHTML = "";
	return window.alert("Enter a value between 0 and 10.");
    }
    if( (f1[0].value === "") || (f1[1].value === "") || (f1[2].value === "")  || (f1[3].value === "")  ){ 
	document.getElementById("tbl1").innerHTML = "";
	return window.alert("Please enter a value in each field.");
    } 

    if( f1[0].value == f1[1].value){
	document.getElementById("tbl1").innerHTML = "";
	return window.alert("Row values can't be the same.");
	
    }
    if(f1[2].value == f1[3].value){
	document.getElementById("tbl1").innerHTML = "";
	return window.alert("Column values can't be the same.");
    }
    else { 
	colrow( f1[0].value, f1[1].value, f1[2].value, f1[3].value );  
    }
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        window.alert("Invalid input, please enter a number.");
	return false;
    }
    return true;
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
    document.getElementById("frm1").reset(); 
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
    bldt(ri, rf, ci, cf);
}
