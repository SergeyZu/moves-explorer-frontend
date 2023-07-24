fetch('https://api.nomoreparties.co/beatfilm-movies')
  .then((res) => res.json)
  .then((data) => {
    console.log(data)
  })
