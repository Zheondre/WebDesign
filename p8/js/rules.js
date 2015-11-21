/* File: https://github.com/Zheondre/WebDesign/blob/gh-pages/p7/js/rules.js
*  91.461 Assignment: Using the jQuery Validation Plugin with Your Dynamic Table
*  Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu 
*  Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely
*  copied or excerpted for educational purposes with credit to the author.
*  updated by AC on November 15, 2015. 4:03 pm
*
*  http://stackoverflow.com/questions/15103289/jquery-validate-js-onkeyup-true-error
*  Does the jquery validate allow custom methods to call built in methods based on a condition ?
*/
$(document).ready(function() { 
    //required function doesnt work when all fields are empty while submit button is hit when the 
    // page first loads, this script will check for that condition.
    $("input").keyup(function(){  
	var ef = 0; 
	$("#frm1 :text").each( function() {
	    if($(this).val() === "") {
		ef++;
	    }
//	    console.log(ef);
	});
	if( ef == 0) {
            document.getElementById("erm4").innerHTML = "";
        }
    });
    $.validator.addMethod("greaterThan",function (value, element, param) {
        var $otherElement = $(param);
        // ignore empty space or letters
	if ( $otherElement.val() === "" || !$.isNumeric($otherElement.val())){  
	    return true; 
	} else { 
	    //if the max was lower than the min, but the min was changed to be lower than max, remove error message from max field
	    if ( this.optional(element) || parseInt(value) <= parseInt($otherElement.val()) ) {
		$otherElement.removeClass( "error" );
                //check the name of the element see if it is maxcol or maxrol, take out the error message for that text field
		if ("#maxrow" === $otherElement["selector"] ) {
                    $("label#maxrow-error").remove() ;
		} else {
		    $("label#maxcol-error").remove() ;
		}
	    }
	    return this.optional(element) || parseInt(value) <= parseInt($otherElement.val());
	}
    });
    $.validator.addMethod("LThnR",function (value, element, param) {
	var $otherElement = $(param);
	if ( $otherElement.val() === "" || !$.isNumeric($otherElement.val()) ){
            return true;
        } else {
	    if ( this.optional(element) || parseInt(value) >= parseInt($otherElement.val()) ) {
		$otherElement.removeClass( "error" ) ;
		$("label#minrow-error").remove() ;
            }
            return this.optional(element) || parseInt(value) >= parseInt($otherElement.val());
	}
    });
   // Enforce a range of ten
    $.validator.addMethod("RangeLimit",function (value, element, param) {
        var $otherElement = $(param);
	if ( $otherElement.val() === "" || !$.isNumeric($otherElement.val())){
            return true;
        } else {
	    return  10 >  parseInt(value) - parseInt($otherElement.val()) ;
	}
    });
    $("#frm1").validate({
	//onkeyup: function(element) {$(element).valid()},
	rules: { 
	    minrow: { 
		required: true, 
		number: true, 
		greaterThan: "#maxrow"	
	    },
	    maxrow: {
                required: true,
                number: true,
		LThnR: "#minrow",
		RangeLimit: "#minrow"
            },
	    mincol: {
                required: true,
                number: true,
		greaterThan: "#maxcol"
            },
	    maxcol: {
                required: true,
                number: true,
		LThnR: "#mincol",
		RangeLimit: "#mincol"
            }
	}, 
	messages: { 
	    minrow: { 
		required: "The Minimum Row Value is required.",
		number: "Enter a digit for the Minimum Row Value.",
		greaterThan: "Mininmum Row Value can not be larger than Maximum Row Value."
	    },
	    maxrow: {
                required: "The Maximum Row Value is required.",
                number: "Enter a digit for the Maximum Row Value.",
		LThnR: "Maximum Row Value can not be smaller then Minimum Row Value.",
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
		LThnR: "Maximum Column Value can not be smaller then Mininmum Column Value.",
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

