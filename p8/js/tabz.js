/// code for tab minapulation
// http://jqueryui.com/tabs/#manipulation
$(function() {
    $( "#tabs" ).tabs();
});
$(function() {
   
    var tabTitle = "test",
    tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
    tabCounter = 2;
    var tabs = $( "#tabs" ).tabs();
    
    // actual addTab function: adds new tab using the input from the form above
    function addTab( tabContent ) {
	var label = tabTitle,
        id = "tabs-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
        tabContentHtml = tabContent;
	//console.log(tabContent);
	tabs.find( ".ui-tabs-nav" ).append( li );
	//console.log(tabContentHtml);
	tabs.append("<div id='" + id + "'>"+ tabContentHtml+"</div>");
	console.log(tabs);
	tabs.tabs( "refresh" );
	tabCounter++;
    }
    // addTab button: just opens the dialog
    $( "#add_tab" ).button().click(function() {
	console.log($( "#tdef" ).html());
	addTab(  $("#tdef" ).html());
            // $( this ).dialog( "close" ); 
	    event.preventDefault();
	});
    // close icon: removing the tab on click
    tabs.delegate( "span.ui-icon-close", "click", function() {
	var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
	$( "#" + panelId ).remove();
	tabs.tabs( "refresh" );
    }); 
    tabs.bind( "keyup", function( event ) {
	if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
            var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
            $( "#" + panelId ).remove();
            tabs.tabs( "refresh" );
	}
    });
});
