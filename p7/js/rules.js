/* File:
*  91.461 Assignment: Using the jQuery Validation Plugin with Your Dynamic Table
*  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu 
*  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely
*  copied or excerpted for educational purposes with credit to the author.
*  updated by AC on November 5, 2015. 10:00 am
*
*  http://stackoverflow.com/questions/15103289/jquery-validate-js-onkeyup-true-error
*/

$(document).ready(function() { 
    $("#frm1").validate({
/*	$.validator.addMethod("rangelimit",function (value, element, param) {
            return this.optional(element) || 10 < parseInt(value) - parseInt($(param).val());
        });*/
	onkeyup: function(element) {$(element).valid()},
	rules: { 
	    minrow: { 
		required: true, 
		digits: true, 
		range: [0,1000]
	    },
	    maxrow: {
                required: true,
                number: true,
		range: [0,1000]
		//rangelimit: "#frm1" 
            },
	    mincol: {
                required: true,
                number: true,
		range: [0,1000]
            },
	    maxcol: {
                required: true,
                number: true,
		range: [0,1000]
            }
	}, 
	messages: { 
	    minrow: { 
		required: "The Minimum Row Value is required.",
		digits: "Enter a digit for the Minimum Row Value."
	    },
	    maxrow: {
                required: "The Maximum Row Value is required.",
                number: "Enter a digit for the Maximum Row Value." 
		//rangelimit:"Row range must be less than 10"
            },
	    mincol: {
                required: "The Minimum Column Value is required.",
                number: "Enter a digit for the Minimum Column Value."
            },
	    maxcol: {
                required: "The Maximum Column Value is required.",
                number: "Enter a digit for the Maximum Column Value."
            }
	},
	errorPlacement: function(error, element) { 
	    switch( element.attr("name") ) { 
	    case "minrow":
		error.appendTo("#erm");
		break; 
	    case "maxrow":
		error.appendTo("#erm1");
		break; 
	    case "mincol":
		error.appendTo("#erm2");
		break;  
	    case "maxcol":
		error.appendTo("#erm3");
		break; 
	    default:
		error.appendTo(element);
	    } 
	}
    });
});
/*
$.validator.addMethod("rangelimit",function (value, element, param) { 

return this.optional(element) || 10 < parseInt(value) - parseInt($(param).val()); 
} 'Invalid value'); 



});
*/
