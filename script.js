
// Search Button and Api Call
document.getElementById('search-btn').addEventListener('click', () => {
  const mealName = document.getElementById('search-Inp').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
  fetch(url)
  .then(res => res.json())
  .then(data => displayMeal(data.meals))
  .catch(error => {
    alert('Not Found')
  })
})


// Display Meal List
const displayMeal = mealsList => {
  const displayMealsDiv = document.getElementById('display-meal');
  mealsList.forEach(meal => {
    const displayMealDiv= document.createElement('div');
    displayMealDiv.classList.add('card');
    const displayMealList = `
    <div onclick="displayMealDetail('${meal.idMeal}')">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strIngredient3}</h5>
      </div>
    </div>
    `
    displayMealDiv.innerHTML = displayMealList;
    displayMealsDiv.appendChild(displayMealDiv)
  });
}

// Display Meal Details Api Call
const displayMealDetail = id => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showSingleDetail(data.meals[0]))
}

// Display Meal Details
const showSingleDetail = (meal) => {
  const mealDiv = document.getElementById('show-details');
  mealDiv.innerHTML = `
    <div class="card myCard" style="width: 350px">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h3 style="font-family: arial black">${meal.strCategory}</h3>
        <h5 class="mt-4 mb-4">Ingredients</h5>
        <ul style="margin: 0px; padding: 0px; list-style: none">
          <li>${meal.strIngredient1}</>
          <li>${meal.strIngredient2}</>
          <li>${meal.strIngredient3}</>
          <li>${meal.strIngredient4}</>
          <li>${meal.strIngredient5}</>
          <li>${meal.strIngredient6}</>
        </ul>
      </div>
    </div>
   `;
}





