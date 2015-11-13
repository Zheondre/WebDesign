/* File: https://github.com/Zheondre/WebDesign/blob/gh-pages/p7/js/rules.js
*  91.461 Assignment: Using the jQuery Validation Plugin with Your Dynamic Table
*  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu 
*  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely
*  copied or excerpted for educational purposes with credit to the author.
*  updated by AC on November 5, 2015. 10:00 am
*
*  http://stackoverflow.com/questions/15103289/jquery-validate-js-onkeyup-true-error
* Greater than less than tutorial
* http://stackoverflow.com/questions/29451507/how-to-use-jquery-validator-to-determine-value-of-one-field-is-greater-than-anot
*
*
*/

$(document).ready(function() { 

    $.validator.addMethod("greaterThan",function (value, element, param) {
        var $otherElement = $(param);
	return this.optional(element) || parseInt(value) > parseInt($otherElement.val());
        return this.optional(element) || parseInt(value) < parseInt($otherElement.val());
    },"hello");
    $.validator.addMethod("LThnR",function (value, element, param) {
        var $otherElement = $(param);
        return this.optional(element) || parseInt(value) > parseInt($otherElement.val());
    });

   // Enforce a range of ten
    $.validator.addMethod("RangeLimit",function (value, element, param) {
        var $otherElement = $(param);
      return  if( 10 <  parseInt(value) - parseInt($otherElement.val())  ) 

    });

    $("#frm1").validate({
	//onkeyup: function(element) {$(element).valid()},
	rules: { 
	    minrow: { 
		required: true, 
		digits: true, 
		range: [0,1000],
		greaterThan: "#maxrow"
	
	    },
	    maxrow: {
                required: true,
                number: true,
		range: [0,1000],
		LThnR: "#minrow",
		RangeLimit: "#minrow"
            },
	    mincol: {
                required: true,
                number: true,
		range: [0,1000], 
		greaterThan: "#maxcol"
            },
	    maxcol: {
                required: true,
                number: true,
		range: [0,1000],
		LThnR: "#mincol",
		RangeLimit: "#mincol"
            }
	}, 
	messages: { 
	    minrow: { 
		required: "The Minimum Row Value is required.",
		digits: "Enter a digit for the Minimum Row Value.",
		greaterThan: "Mininmum Row Value can not be larger than Maximum Column Value."
	
	    },
	    maxrow: {
                required: "The Maximum Row Value is required.",
                number: "Enter a digit for the Maximum Row Value.",
		LThnR: "Maximum Row Value can not be smaller then Mininmum Row Value.",
		RangeLimit: "Row Range must not exceed a value of ten."
	    },
	    mincol: {
                required: "The Minimum Column Value is required.",
                number: "Enter a digit for the Minimum Column Value.",
		greaterThan: "Mininmum Column Value can not be Larger than Maximum Column Value."
            },
	    maxcol: {
                required: "The Maximum Column Value is required.",
                number: "Enter a digit for the Maximum Column Value.",
		LThnR: "Maximum Row Value can not be smaller then Mininmum Row Value.",
		RangeLimit: "Column Range must not exceed ten."
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
		break;
	    } 
	} 
    });
});

