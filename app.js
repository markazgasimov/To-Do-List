"use strict";
$(document).ready(function () {

// $('.btn').click(function (e) { 
//     e.preventDefault();
//     let func = a =>{
//         if(Number(a)){
//             for(let i=1; i<=a; i++){
//                 $('.content').append(`<h1>${a}</h1>`)
//             }
//         }else if(String(a)){
//             $('.content').append(`<h1>${a}</h1>`)
//         }else if($('input').val('')){
//             $('.content').append("")
//         }
//         $('input').val('');
//     }
//     func($('input').val());
// });

$('.btn').click(function (e) { 
    e.preventDefault();
    function func(myclass = "") {
        if (!$.trim($("input").val()) == '') {
            let value = $('<h3></h3>')
        }else{
            return
        }        
    }
    
    
});


});