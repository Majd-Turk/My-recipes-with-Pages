const source = $('#recipe-template').html()
const recipeTemplate = Handlebars.compile(source)

let currentPage = 1
const perPage = 4

function displayRecipes(recipes, currentPage, totalPages) {
  if (!Array.isArray(recipes)) {
    recipes = Array.from(recipes)
  }
  const $recipes = $('#recipes')
  let start = (currentPage - 1) * perPage
  let end = start + perPage
  let newHtml = recipeTemplate({ data: recipes.slice(start, end) })

  $recipes.empty()

  $recipes.append(newHtml)


  let $pagination = $("#pagination")
  $pagination.empty()
  if (currentPage > 1) {
    $pagination.append($('<a href="#" class="pagination-btn page-link" id="prevPage">Prev</a>'))
  }
  for (let i = 1; i <= totalPages; i++) {
    let $pageLink = $(`<a href='#' class="pagination-btn page-link">${i}</a>`)
    if (i === currentPage) {
      $pageLink.addClass("active")
    }
    $pagination.append($pageLink)
  }
  if (currentPage < totalPages) {
    $pagination.append($('<a href="#" class="pagination-btn page-link" id="nextPage">Next</a>'))
  }
  let $pageInfo = $("#pageInfo")
  $pageInfo.html(`Page ${currentPage} of ${totalPages}`)
}


function renderResults(recipes) {
  const totalResults = recipes.length
  const totalPages = Math.ceil(totalResults / perPage)
  displayRecipes(recipes, currentPage, totalPages)
}
