"use strict";

let html = '';

window.onload = () => {
    fetch('https://tea-api-vic-lo.herokuapp.com/tea')
        .then(response => response.json())
        .then(data => {
            console.log('Getting data');
            console.log(data);

            data.forEach(data => {

                html += `
                <article>
                    <div class="image_wrapper">
                        <img src="${data.image}">
                    </div>
                    <div class="article_content_wrapper">
                        <div>
                            <h1>${data.name}</h1>
                        </div>
                        <div class="content">
                            ${data.description}
                        </div>
                    </div>
                </article>
                `;

            })

            document.getElementById("container").innerHTML = html;

        });
}
