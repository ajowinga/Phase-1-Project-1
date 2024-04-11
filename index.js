document.addEventListener("DOMContentLoaded",()=>{
    fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then (response=>response.json())
    .then(data=>data.array.forEach(element => {
        console.log(element)
    }))
// const cocktailList=document.getElementById("cocktail-list")
// const container=document.getElementById("cocktail names")
// const lists=document.createElement("li")
// lists.textContent=data.strDrink
// container.append(cocktailList)
// cocktailList.append(lists)
   })
  