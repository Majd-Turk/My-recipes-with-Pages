function performSearch(ingredient, dairySensitive, glutenSensitive, currentPage) {
  return searchRecipes(ingredient, dairySensitive, glutenSensitive, currentPage)
    .then(function (data) {
      if (data.recipes.length === 0) {
        $('#recipes').html('<p>No recipes found.</p>')
      } else {
        displayRecipes(data.recipes, data.currentPage , data.totalPages)
        totalPages = data.totalPages
      }
    })
}

$(function () {
  let currentPage = 1

  $('#searchBtn').on("click", function () {
    const ingredient = $('#ingredient').val()
    const dairySensitive = $('#dairy-free').is(':checked')
    const glutenSensitive = $('#gluten-free').is(':checked')
    currentPage = 1
    performSearch(ingredient, dairySensitive, glutenSensitive, currentPage)
  })

  $(document).on("click", ".page-link", function () {
    const ingredient = $('#ingredient').val()
    const dairySensitive = $('#dairy-free').is(':checked')
    const glutenSensitive = $('#gluten-free').is(':checked')
    if ($(this).attr('id') === "nextPage") {
      currentPage++;
    } else {
      currentPage = parseInt($(this).text())
    }
    performSearch(ingredient, dairySensitive, glutenSensitive, currentPage)
  })

  $(document).on("click", ".recipe-image", function () {
    let ingredients = $(this).siblings("ul").children("li")
    let firstIngredient = $(ingredients[0]).text()
    alert(firstIngredient)
  })
})