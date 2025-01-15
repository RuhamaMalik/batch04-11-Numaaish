const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/recipes");
    return response.json();
  } catch (error) {
    throw new Error("Error in Fetching Recipe data");
  }
};

const getData = async () => {
  try {
    const dataResult = await fetchData();
    const recipes = dataResult.recipes;
    displayRecipe(recipes);
  } catch (error) {
    throw new Error("Error in Fetching Recipe data");
  }
};

getData();

////////////////// Dispalay Recipe

const recipeContainer = document.getElementById("recipeContainer");

const displayRecipe = (data) => {
  if (data && data.length > 0) {

    data.forEach(recipe => {
        console.log(recipe);
        
        const card = document.createElement("div");
        card.className = "card   col-12 col-md-4 col-lg-3";
        card.innerHTML = `
         <img src="${recipe.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${recipe.name}</h5>
              <h6 class="card-title">Servings : ${recipe.servings}</h6>
              <a href="detail-page.html?id=${recipe.id}" class="btn btn-danger">View Details</a>
            </div>
        `
        recipeContainer.appendChild(card)

    });
  } else {
    recipeContainer.innerHTML = `<h2 class= "text-center my-5">No recipes found</h2>`;
  }
};
