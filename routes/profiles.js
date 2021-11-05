import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
const router = Router()

router.post('/pokemon', isLoggedIn, profilesCtrl.addToCollection)
router.get('/:id/pokemon', isLoggedIn, profilesCtrl.pokeDex)
router.get('/:profileId/pokemon/:pokemonId', isLoggedIn, profilesCtrl.pokeShow)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/auth/google')
}

export {
  router
}