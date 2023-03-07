let currentPage = 1
let totalPages = 1
function performSearch(ingredient, dairySensitive, glutenSensitive, currentPage) {

  return searchRecipes(ingredient, dairySensitive, glutenSensitive, currentPage)
    .then(function (data) {
      if (data.recipes.length === 0) {
        $('#recipes').html('<p>No recipes found.</p>')
      } else { 
        totalPages = data.totalPages
        currentPage = currentPage > totalPages ? totalPages : currentPage
        displayRecipes(data.recipes, currentPage, totalPages)
        return {
          data: data,
          totalPages: totalPages
        }
      }
    })
}


  $('#searchBtn').on("click", function () {
    const ingredient = $('#ingredient').val()
    const dairySensitive = $('#dairy-free').is(':checked')
    const glutenSensitive = $('#gluten-free').is(':checked')
    performSearch(ingredient, dairySensitive, glutenSensitive, currentPage)
  })

  $(document).on("click", ".page-link", function () {
    const ingredient = $('#ingredient').val()
    const dairySensitive = $('#dairy-free').is(':checked')
    const glutenSensitive = $('#gluten-free').is(':checked')
    if ($(this).attr('id') === "nextPage") {
      currentPage++;
    } else if ($(this).attr('id') === "prevPage") {
      currentPage--;
    } else {
      currentPage = parseInt($(this).text())
    }
    performSearch(ingredient, dairySensitive, glutenSensitive, currentPage)
      .then(function (data) {
        if (currentPage >= data.totalPages) {
          $("#nextPage").hide();
        } else {
          $("#nextPage").show();
        }
        if (currentPage <= 1) {
          $("#prevPage").hide();
        } else {
          $("#prevPage").show();
        }
      })
  })

  $(document).on("click", ".recipe-image", function () {
    let ingredients = $(this).siblings("ul").children("li")
    let firstIngredient = $(ingredients[0]).text()
    alert(firstIngredient)
  })

