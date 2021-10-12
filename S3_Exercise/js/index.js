"use strict";

window.onload = function () {

    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault('submit');
        let titleInput = document.getElementById('titleInput').value;
        fetch(`https://www.omdbapi.com/?t=${titleInput}&apikey=38a2bae5`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let html = `<div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src="${Poster}" class="card-img" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${Title}</h5>
                            <p class="card-text">${Plot}</p>
                            <div><p class="card-text"><small class="text-muted">Duration: ${Runtime}</small></p>
                            <button id="addRuntimeBtn">+</button></div>
                        </div>
                    </div>
                </div>
            </div>`

                document.getElementById('Container').innerHTML = html;

            })
    })
}

