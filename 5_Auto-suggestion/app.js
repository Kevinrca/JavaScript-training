

const citys = [
    {name: "Paris"}, 
    {name: "Lyon"}, 
    {name: "Lille"}, 
    {name: "Marseille"}, 
    {name: "Berlin"}, 
    {name: "Oslo"}, 
    {name: "Nex York"}, 
    {name: "Mehun sur Yèvre"}, 
    {name: "Vierzon"}, 
    {name: "Bourges"},
    {name: "Bourg"},
    {name: "Bordeaux"},
    {name: "Losanne"}
];

const suggestionsContainer = document.querySelector(".suggestions");
const cityInput = document.getElementById("cityInput");


cityInput.addEventListener("input", () => searchCity(cityInput.value));




function searchCity(searchText) {
    suggestionsContainer.innerHTML = "";

    let matches = citys.filter(city => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return city.name.match(regex);
    });

    matches.forEach(element => {
        suggestionsContainer.innerHTML += `<div class="suggestion">${element.name}</div>`;
    });
    


    let suggestions = document.querySelectorAll(".suggestion");
    suggestions.forEach(suggestion => {
        suggestion.addEventListener("click", (e) => {
            e.preventDefault();
            cityInput.value = suggestion.innerHTML;
            suggestionsContainer.innerHTML = "";
        })
    })




    if(searchText.length === 0) {
        suggestionsContainer.innerHTML = "";
    }
}
