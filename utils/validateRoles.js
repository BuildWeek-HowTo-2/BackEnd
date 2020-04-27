module.exports = {
  validateInstructor,
  validateUser
}

function validateInstructor(req, res, next) {
  if(req.decodedJwt.role === 'instructor'){
    next()
  } else {
      res.status(401).json({message: 'You do not have the correct user role for this action.'})
  }
}
function validateUser(req, res, next) {
  if(req.decodedJwt.role === 'user'){
    next()
  } else {
      res.status(401).json({message: 'You do not have the correct user role for this action.'})
  }
}