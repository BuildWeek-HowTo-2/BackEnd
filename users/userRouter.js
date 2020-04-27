const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./userModel.js')
const { validateUser } = require('../utils/validateUser');
const secret = require('../utils/secrets')

router.post('/register', validateUser, (req, res) => {
  const userData = req.body;
  console.log('userdata in register',userData)
  const hash = bcrypt.hashSync(userData.password, 8);
  userData.password = hash;
  Users.insert(userData)
  .then(saved => {
    console.log('saved user data on insert',saved)
  })
  .catch((err) => {
    res.status(500).json(err)
  })
})

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  Users.getBy({username})
  .first()
  .then(user => {
    console.log('user in login', user)
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      console.log("TOKEN", token)
      res.status(200).json({
          message: `Welcome ${user.username}! Here is a token...`,
          token
      });
    } else {
    res.status(401).json({ message: 'Invalid Credentials' });
    }
  })
})


function generateToken(user) {
    
  const payload = {
      subject: user.id,
      username: user.username,
      role: "user" 
  };
  
  const secret = process.env.JWT_SECRET || "is it secret? is it safe?";
  
  const options = { 
      expiresIn: "1d"
  };
  
  return jwt.sign(payload, secret, options);
}


module.exports = router;