/*
* file: http://weblab.cs.uml.edu/~acalcano/p5/js/driver.js
* 91.461 Assignment: Formatting Dynamic Tex
* Angel Calcano, UMass Lowell Computer Science, Angel_Calcano@cs.uml.edu
* Copyright (c) 2015 by Angel Calcano.  All rights reserved.  May be freely
* copied or excerpted for educational purposes with credit to the author.
* updated by AC on October 29, 2015. 10:19am.
*
* Driver source code is from
* https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-assn/FormattingText-v05.jsp
*
* file: http://weblab.cs.uml.edu/~acalcano/p5/js/p5.json
* got text from
* http://www.philosophy-index.com/d-holbach/system-nature/i-i.php
*/

// this function will run after the body has been loaded
jQuery(document).ready( function() {
    jQuery.get( "js/p5.json", function( data ) {
	placeContent( data ) ;  // construct output from the data read
    }, "json" );  // be sure to include this third parameter for weblab.cs.uml.edu
});

// N.B.  This version *does* apply the CSS.
function placeContent( story ) {
    var strContent = "";
    
    // create dynamic content from JSON
    
    strContent += "<a href="+story.Link +" id='Link'>Reference</a>" 
    strContent += "<h1 class='title'>" + story.title + "</h1>" ;
    strContent += "<h2 class='author'>by " + story.author + "</h2>" ;
    strContent += "<h3 class='authorsTitle'>" + story.authorsTitle + "</h3>" ;   
    // loop through all the paragraphs and sentences
    for ( var para = 0 ; para < story.text.paragraphs.length ; para++ ) {
	// if the counter is zero, add the id
	if ( para == 0 ) 
	    strContent += "<p id='fstn'>"; 
	else 
	    strContent += "<p>" ;
	for ( var sent = 0 ; sent < story.text.paragraphs[para].length ; sent++ ) {
	    strContent += story.text.paragraphs[para][sent] + "&nbsp; " ;
	}
	strContent += "</p>" ;
    }
    // place dynamic content on page
    $("#content").html( strContent ) ;
}
