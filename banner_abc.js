// ==UserScript==
// @name         Quitar login modal de ABC color abc.com.py
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Quitar el odioso modal de ABC color abc.com.py
// @author       Eduardo Morales https://twitter.com/moralotto
// @match        https://www.abc.com.py/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
    $(window).on('load', function() {
       var body = document.getElementsByClassName("tp-modal-open")[0];
        if (body !== undefined)
        {
            body.classList.remove('tp-modal-open');
        }
        $( ".tp-backdrop" ).remove();
        $( ".tp-modal" ).remove();
   })
})();