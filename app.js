"use strict";
$(document).ready(function () {

$('.btn').click(function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        let a = b => {
            for (let i = 0; i < b; i++) { $('.content').append(`<h2>${b}</h2>`) };
        }
        let d = f => Number(f) ? a(f) : $('.content').append(`<h2>${f}</h2>`);
        d($('input').val());
    }else{
        return
    }
    $('input').val('') 
})

});


















