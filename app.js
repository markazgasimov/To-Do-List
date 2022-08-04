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
// });

$('.btn').click(function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        let a = b => {
            for (let i = 0; i < b; i++) { $('.minibox').append(`<h3>${b}</h3>`) };
        }
        let d = f => Number(f) ? a(f) : $('.minibox').append(`<h3>${f}</h3>`);
        d($('input').val());
    }
    $('input').val('') 
})


});


















