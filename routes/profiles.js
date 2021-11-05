import { Router } from 'express'
const router = Router()




function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return done()
  }
  res.redirect('/auth/google')
}

export {
  router
}