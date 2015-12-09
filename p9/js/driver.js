/*  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original-distribution
 */
//http://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript
$(document).ready(function() { 
    var ScrabbleTiles = [] ;
    ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
    ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
    ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
    ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
    ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
    ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
    ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
    ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
    ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;
    // generates random char
    function rchar(){
	// taking out _ from char array 11.8.15 11:13am doubled the amount of vowels to see more pop up in the rack
	var alpha= "AABCDEEFGHIIJKLMOONPQRSTUUVWXYYZ"; 
	return alpha.charAt( Math.floor(Math.random() * alpha.length ) );
    } 
    //should check for a case of when they are all zero
    function draw(){ 
	var somechar = rchar();
	if ( ScrabbleTiles[somechar]["number-remaining"] == 0 ){
	    do { 
		somechar = rchar(); 
	    }while( ScrabbleTiles[somechar]["number-remaining"] == 0 )
	    if( ScrabbleTiles[somechar]["number-remaining"] > 0 ){ 
		ScrabbleTiles[somechar]["number-remaining"]--;
		return somechar; 
	    }   
	}else {
	    ScrabbleTiles[somechar]["number-remaining"]--;    
	    return somechar;    
	}
    }    
    function addletter(somechar){
	// creat the attribute 
	pound = "." + somechar;
	$('#sortable').append('<li class='+somechar+'></li>');
	$(pound).attr("LValue", ScrabbleTiles[somechar]["value"]);
	//$(pound).addclass("Lsize"); 
    }
    function rerack(){ 
	for( var i = 0; i < 7; i++ ) {
	    addletter(draw());
	}
    } 
    rerack();
    $( "#submit" ).button().click(function() {
    // check for a valid word                                                                                                                   // add it to score add bonus if they apply                                                                                                 // clear both board and only add the amount that is needed                                                                                 // rerack()                                                                                                                             
        $('#t1 tr').each(function(){
            $(this).find('td').each(function(){
		$(this).html(""); 
                console.log( $(this).html());
            });
        });
    });
    $( "#reset" ).button().click(function() {
    });
    $( "#quit" ).button().click(function() {
    });    
});








