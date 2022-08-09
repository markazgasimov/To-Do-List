"use strict";
$(document).ready(function () {

$('.btn').click(function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        let a = b => {
            for (let i = 0; i < b; i++) { $('.content').append(`<h2>${b}</h2>`) };
        } 
        let c = d => Number(d) ? a(d) : $('.content').append(`<h2>${d}</h2>`);
        c($('input').val());
    }else{
        return
    }
    $('input').val('') 
})

});

















