const searchRequestHandler = (searchRequest) => {
  const initialMovies = JSON.parse(localStorage.getItem('allMovies'))
  const resultSearchRequest = searchRequest.toLowerCase()

  const selectedMovies = initialMovies.filter((movie) => {
    const ruTitleToLowerCase = movie.nameRU.toLowerCase()
    const enTitleToLowerCase = movie.nameEN.toLowerCase()
    return (
      ruTitleToLowerCase.includes(resultSearchRequest) ||
      enTitleToLowerCase.includes(resultSearchRequest)
    )
  })

  // console.log(selectedMovies)
  localStorage.setItem('foundMovies', JSON.stringify(selectedMovies))
  return selectedMovies
}

export default searchRequestHandler
