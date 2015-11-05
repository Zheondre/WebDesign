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
		number: true, 
		range: [-1000,1000]
	    },
	    maxrow: {
                required: true,
                number: true,
		range: [-1000,1000]
            },
	    mincol: {
                required: true,
                number: true,
		range: [-1000,1000]
            },
	    maxcol: {
                required: true,
                number: true,
		range: [-1000,1000]
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
	errorPlacement: function(error, element) { 
	    switch( element.attr("name") ) { 
	    case "minrow":
		error.insertAfter("#erm");
		break; 
	    case "maxrow":
		error.insertAfter("#erm");
		break; 
	    case "mincol":
		error.insertAfter("#erm");
		break;  
	    case "maxcol":
		error.insertAfter("#erm");
		break; 
	    default:
		error.insertAfter(element);
	    } 
	}
    });
});
/*

errorPlacement: function(error, element) {
            if ( element.attr("name") == "minrow" ) {
                error.insertAfter("#erm");
		}else {
                error.insertAfter(element);
		}
		}
*/


/*
jQuery.validator.addMethod("rangelimit",function (value, element) { 





});





*/
