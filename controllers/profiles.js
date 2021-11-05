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

export {
  addToCollection
}