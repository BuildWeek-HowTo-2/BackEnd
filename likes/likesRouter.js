const router = require('express').Router();

const likes = require('./likesModel');
const tutorials = require('../tutorials/tutorialsModel')
const errorHandler = require('../utils/errorHandler');
const {
  validateLikeShape,
  validateLikeExistingPost
} = require('../utils/likesMiddleware')


router.post("/", validateLikeShape, validateLikeExistingPost,(req, res, next) => {

  likes
    .insertLike(req.body)
    .then((tutorial) => {
      const id = reg.body.tutorial_id
      tutorials
      .update(id, { likes: tutorial.likes + 1 })
        .then((updatedtutorial) => res.status(201).json(updatedtutorial))
        .catch((err) => {
          console.log(err);
          res.status(502).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(503).json(err);
    });
}  
  
 
  
   
);





// router.post('/', (req, res) => {
//    const likeData = req.body
//   likes.insertLike(likeData)
//   .then(count => {
//     if(count) {
//      res.status(201).json(`message: you just killed ${count} tutorial mourn them you animal`) 
//     }
//   })

//   .catch((err) => {
//     errorHandler(res, err, 500, 'Unable to retrieve tutorials');
//   });
 
// })

router.get("/:id", (req, res) => {
    likes.getLikesById()
    .then((likes) => {
      if (!likes.length) {
        res
          .status(404)
          .json({ message: "No likes were found in the database." });
      } else {
        res.json(likes);
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;