"use strict";
$(document).ready(function () {

$('.btn').click(function (e) {
    e.preventDefault();
    if (!$.trim($('input').val()) == '') {
        let a = b => {
            for (let i = 0; i < b; i++) { $('.content').append(`<h3>${b}</h3>`) };
        }
        let d = f => Number(f) ? a(f) : $('.content').append(`<h3>${f}</h3>`);
        d($('input').val());
    }else{
        return
    }
    $('input').val('') 
})

});


















