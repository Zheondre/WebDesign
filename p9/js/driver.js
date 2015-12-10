
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
 //https://piazza.com/class/icm9jynacvn5kx?cid=43  
   // The dictionary lookup object
    var dict = {};
    // Do a jQuery Ajax request for the text dictionary
    $.get( "js/dict/dict.txt", function( txt ) {
	// Get an array of all the words
	var words = txt.split( "\n" );	
	// And add them as properties to the dictionary lookup
	// This will allow for fast lookups later
	for ( var i = 0; i < words.length; i++ ) {
            dict[ words[i] ] = true;
	}
    });
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
    function clearBoard(){ 
	$('#t1 tr').each(function(){
            $(this).find('td').each(function(){
                $(this).html("");           
            });
        });
    } 
    function rerack(amount){ 
	for( var i = 0; i < amount; i++ ) {
	    addletter(draw());
	}
    } 
    function wordBonus(){ 
	if( x3 == 1 ) { 
	    totalScore = tempScore + 3*crntRndScore;
	    x3 = 0; 
	} 
	if( x2 == 1 ) {
	    totalScore = tempScore + 2*crntRndScore;
	    x2 = 0;         
	}
    } 
    //https://piazza.com/class/icm9jynacvn5kx?cid=43
    function validWord( word ) { 
	// See if it's in the dictionary
	if ( dict[ word ] ) {
            // If it is, return that word
            return true;
	}
	// Otherwise, it isn't in the dictionary.
	return false; 
    } 
    rerack(7);
    $( "#submit" ).button().click(function() {

	stwrd = colofletters;
	colofletters= ""; 
	//check if is greater than one if not report error
	if ( stwrd.length > 1 ){

	    //console.log(validWord(stwrd.toLowerCase()) ); 
	    if( validWord(stwrd.toLowerCase()) ){ 
		wordBonus();
	    }else{ 
		totalScore = tempScore ;
	    }
	    $("#ldropped").html(totalScore);
	    crntRndScore = 0 ;
	    // add the amount that is neede
	    rerack(drawCount); 
	    drawCount = 0; 	    
	    $("#ldropped").html("");
	    clearBoard();   
	}                        
    });
    $( "#reset" ).button().click(function() {
	$("#sortable").html("");
	rerack(7);    
});
    $( "#quit" ).button().click(function() {
//quit game, pull up a screen asking to play again
    });    
});








