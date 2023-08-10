const countriesElem = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropElem = document.querySelector(".drop");
const search = document.querySelector(".search");

async function getCountry() {
    const url = await fetch("https://restcountries.com/v3.1/all");
    const res = await url.json();
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry()

function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    country.innerHTML = ` <div class="country-flog">
    <img src="${data.flags['png']}" alt="">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name['common']}</h5>
    <p><strong>Population:</strong>${data.population}</p>
    <p><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`;
    countriesElem.appendChild(country)
    country.addEventListener("click", () => {
        showCountryData(data)
    })
}
dropDown.addEventListener("click", () => {

    dropElem.classList.toggle("showdropdown");
    console.log("hello");

})
/*******************search********************** */
search.addEventListener("input", () => {
    console.log(search.value.toLowerCase());
    const countryNames = document.querySelectorAll(".countryName"); // Select elements with class "countryName"

    countryNames.forEach(elem => {
        if (elem.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            elem.parentElement.parentElement.style.display = "grid";
        } else {
            elem.parentElement.parentElement.style.display = "none";
        }
    });
});
/*************************select*************************** */
const countryModal = document.querySelector(".countryModal")
function showCountryData(data) {
    countryModal.classList.toggle("show")
    countryModal.innerHTML = `<button class="back">Back</button>
    <div class="modal">
      <div class="leftModal">
        <img src="${data.flags['png']}" alt="">
      </div>
      <div class="countryDetails">
        <h1>${data.name['common']}</h1>
        <div class="innerLeft">
        <p><strong>Population: </strong>${data.population}</p>
        <p><strong>Region: </strong>${data.region}</p>
        <p><strong>Capital: </strong>${data.capital}</p>
        <div class="innerRight">
        <p><strong>independent: </strong>${data.independent}</p>
        <p><strong>languages: </strong>${data.languages['eng'||'eng']}</p>
        <p><strong>area: </strong>${data.area}</p>
        </div>
        </div>
      </div>
    </div>`;
    const back = countryModal.querySelector(".back")
    back.addEventListener("click", () => {
        countryModal.classList.toggle("show")
    })
}
