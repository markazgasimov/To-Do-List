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
$(".btn").click(function (e) {
    e.preventDefault()
    function myel(myclass = "") {
        if (!$("input").val().trim() == '') {
            let vall = $("input").val()
                , newH3 = $('<h3> </h3>')
                , newDiv = $('<div class="line" > </div>')
                , bigDiv = $(`<div ${myclass} > </div>`)
            $(newH3).append(vall)
            $(newDiv).append(newH3)
            $(bigDiv).append(newDiv)
            return bigDiv
        }
        else {
            return
        } 
    }
    $(".content").append(myel())
    // $(".content").append(myel('class="end"'))
    $("input").val("")
    // document.querySelector("#messageme").scrollTo(0, document.querySelector("#messageme").scrollHeight)
    // document.querySelector("#messageyou").scrollTo(0, document.querySelector("#messageyou").scrollHeight)
})




















});