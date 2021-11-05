import { Profile } from '../models/profile.js'

function addToCollection(req, res) {
  // Find the profile
  Profile.findById(req.user.profile._id)
  .then(profile => {
    // Push the pokemon data (req.body) into pokemon Schema
    profile.pokemon.push(req.body)
    profile.save()
    .then(()=> {
      res.redirect('/')
    })
  })
}

function pokeDex(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/pokeDex', {
      title: `${profile.name}'s PokeDex`,
      user: req.user,
      profile
    })
  })
}

function pokeShow(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    console.log(profile)
    let index = profile.pokemon.findIndex(item => item._id == req.params.pokemonId)
    res.render('profiles/pokeShow', {
      title: `${profile.name}'s Pokemon`,
      user: req.user,
      profile,
      pokemon: profile.pokemon[index]
    })
  })
}

export {
  addToCollection,
  pokeDex,
  pokeShow
}