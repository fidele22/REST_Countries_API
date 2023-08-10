const countriesElem=document.querySelector(".countries");
const dropDown=document.querySelector(".dropDown");
const dropElem=document.querySelector(".drop");
const search=document.querySelector(".search");

async function getCountry(){
    const url=await fetch("https://restcountries.com/v3.1/all");
    const res=await url.json(); 
    console.log(res);
    res.forEach(element => {
        showCountry(element)
    });
}
getCountry()

function showCountry(data){
    const country=document.createElement("div")
    country.classList.add("country")
    country.innerHTML= ` <div class="country-flog">
    <img src="${data.flags['png']}" alt="">
</div>
<div class="country-info">
    <h5 class="countryName">${data.name['common']}</h5>
    <p><strong>Population:</strong>${data.population}</p>
    <p><strong>Region:</strong>${data.region}</p>
    <p><strong>Capital:</strong>${data.capital}</p>
</div>`;
countriesElem.appendChild(country)
}
dropDown.addEventListener("click",()=>{
dropElem.classList.toggle("showdropdown")
console.log("hello");
})

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
