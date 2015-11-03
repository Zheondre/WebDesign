/* File:
*  Angel_Calcano 
*  
*
* http://stackoverflow.com/questions/15103289/jquery-validate-js-onkeyup-true-error
*/

$(document).ready(function() { 
    $("#frm1").validate({
	onkeyup: function(element) {$(element).valid()},
	rules: { 
	    minrow: { 
		required: true, 
		number: true
	    },
	    maxrow: {
                required: true,
                number: true
            },
	    mincol: {
                required: true,
                number: true
            },
	    maxcol: {
                required: true,
                number: true
            }
	}, 
	messages: { 
	    minrow: { 
		required: "Enter a value for the minimum row value.",
		digits: "Enter a digit."
	    },
	    maxrow: {
                required: "Enter a value for the maxiimum row value.",
                digits: "Enter a digit."
            },
	    mincol: {
                required: "Enter a value for the minimum column value.",
                digits: "Enter a digit."
            },
	    maxcol: {
                required: "Enter a value for the maximum column value.",
                digits: "Enter a digit."
            }
	},
	errorPlacement: function( error, element ) { 
	    if ( elemnt.attr("name") == "minrow" ) {
		error.insertAfter("#maxcol");
	    }else {
		error.insertAfter(element);
	    }
	} 
    });
});
		       


