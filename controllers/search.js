import axios from 'axios'

function pokeSearch(req, res) {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.body.query}`)
  .then(response => {
    res.render('search',{
      title: 'Search Results',
      user: req.user,
      pokemon: response.data
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles/pokemon')
  })
}

export {
  pokeSearch
}