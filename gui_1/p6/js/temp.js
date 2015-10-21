/* 
* Temp.js 
* file used for example code that isn't being used
* Angel Calcano
*/

function myFunction() {                                                              
    window.alert("good");                                                            
    var table = document.getElementById("tbl1");                                     
    var k = 1;                                                                       
    var f1 = document.getElementById('frm1').elements;                               
    for( var i = 0 ; i < f1.length - 2; i++) {                                       
        table.rows[k].cells[0].innerHTML = Number(f1[i].value);                      
        k = k + 1 ;                                                                  
    }                                                                                
    for( var i = 1, row; row = table.rows[i]; i++ ) {                                
        var CurCelval = Number( table.rows[i].cells[0].innerHTML);                   
        for( var j = 1, col; col = row.cells[j]; j++){                               
            col.innerHTML = CurCelval * Number( table.rows[0].cells[j].innerHTML);   
        }                                                                            
    }                                                                                
} 
