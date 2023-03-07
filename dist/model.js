function searchRecipes(ingredient, dairy, gluten, currentPage) {
  let apiUrl = `/recipes/${ingredient}?page=${currentPage}`
  if (dairy || gluten) {
    apiUrl += "?"
    if (dairy) {
      apiUrl += "dairy=true&"
    }
    if (gluten) {
      apiUrl += "gluten=true&"
    }

    apiUrl = apiUrl.slice(0, -1)
  }
  return $.get(apiUrl)
}




