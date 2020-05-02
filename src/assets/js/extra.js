/**
 * @File   : extra.js
 * @Author : Gunza Ismael (7ilipe@gmail.com)
 * @Link   : 
 * @Date   : 30/04/2020, 17:14:57
 */

$(document).ready(function() {
    $('.parallax').parallax();
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});