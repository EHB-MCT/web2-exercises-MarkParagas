"use strict";

window.onload = function () {
    console.log('loading');
    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault(); // Stay in your current page
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        console.log(name,email, order);
        // Must be Inside so it could be define
        document.getElementById('container').innerHTML = `<p> The order from the customer <b> ${name} </b> with the following <b> ${order} </b>, notify by email: <b>${email}</b></p>`
    });
};
