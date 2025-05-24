'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

// AJAX call using XMLHttpRequest
const getCountyData = function (country) {
    // Create a new XMLHttpRequest object
    const request = new XMLHttpRequest();

    // Open a connection to the API endpoint
    request.open('GET', `https://restcountries.com/v3.1/name/${country}?fullText=true`, true);

    // Send the request
    request.send();

    // Add an event listener for when the request loads
    request.addEventListener('load', function () {
        // Parse the JSON response
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        // Render the country data
        renderCountry(data);

        //Get neighboring countries
        const neighbors = data.borders;
        if (!neighbors) return;
        neighbors.forEach(neighbor => {
            // Fetch data for each neighboring country
            const neighborRequest = new XMLHttpRequest();
            neighborRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`, true);
            neighborRequest.send();

            neighborRequest.addEventListener('load', function () {
                const [neighborData] = JSON.parse(this.responseText);
                renderCountry(neighborData, 'neighbour');
            });
        });
    });
};
// Example usage of the getCountyData function
getCountyData('Portugal');
getCountyData('Malaysia');
getCountyData('Singapore');

