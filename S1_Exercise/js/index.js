"use strict";

window.onload = function () {
    console.log('loading');
    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault(); // Stay in your current page
        let name = document.getElementById('nameInput').value;
        let email = document.getElementById('emailInput').value;
        let order = document.getElementById('orderInput').value;
        console.log(name,email, order);

    });
    document.getElementById('container').innerHTML = getMessage(name,order,email);
};

function getMessage() {
    let html = `
    <article>
    ${name} ordered: ${order} [${email}]
  </article>
  `
}
