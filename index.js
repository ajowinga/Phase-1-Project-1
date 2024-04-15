document.addEventListener("DOMContentLoaded", () => {


    const baseUrl = "http://localhost:3000/university";
    // let universities=[]
  
  
    const form = document.getElementById("form");
  
    const search = document.getElementById("search");
  
    const results = document.getElementById("results-container");
  
  
    // Prevent default form submission behavior
  
    form.addEventListener("submit", (event) => {
  
      event.preventDefault();
  
  
      const filter = search.value.toLowerCase();
  
      const filteredUniversities = university.filter(university => university.name.toLowerCase().includes(filter));
      
  
  
      renderUniversities(filteredUniversities, results);
  
    });
  
  
    // Fetch universities from API and render initial list
  
    fetch(baseUrl)
  
      .then(response => response.json())
  
      .then(data => {
  
        const universities = data;
  
        renderUniversities(universities, results);
  
      })
  
      .catch(error => console.log(error));
  
  
  });
  
  
  function renderUniversities(universities, results) {
  
    // Clear existing results
  
    results.innerHTML = "";
  
  
    universities.forEach(university => {
  
      const li = document.createElement("li");
  
      li.textContent = university.name;
  
      results.appendChild(li);
  
  
      const image = document.createElement("img");
  
      image.src = university.image;
  
      results.appendChild(image);
  
  
      const country = document.createElement("p");
  
      country.textContent = university.country;
  
      results.appendChild(country);
  
  
      const ranking = document.createElement("p");
  
      ranking.textContent = `Ranking: ${university.ranking}`;
  
      results.appendChild(ranking);
  
    });
  
  }