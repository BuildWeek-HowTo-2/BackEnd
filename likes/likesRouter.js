const router = require('express').Router();
// const knex = require('../data/dbConfig')
const likes = require('./likesModel');
const tutorials = require('../tutorials/tutorialsModel')
const errorHandler = require('../utils/errorHandler');
const {
  validateLikeShape,
  validateLikeExistingPost
} = require('../utils/likesMiddleware')



router.post("/", validateLikeShape, validateLikeExistingPost,(req, res, next) => {
  const like = req.body
  likes
    .insertLike(like)
    .then((tutorial) => {
      res.status(201).json({message: 'you liked this post'})
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
});  
})


router.get("/", (req, res) => {
    likes.getlikesTest()
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

router.get("/:id", (req, res) => {
  const {id} = req.params.id
  likes.getlikesById(id)
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


// router.post('/', (req, res) => {
// 	const likesData = req.body;
// 	knex('likes')
//         .insert(likesData, 'id')
//         .then(([id]) => id)
//         .then(id => {
//             knex('tutorials')
//             .where({ id })
//             .first()
//             .then(idk => {
//                 res.status(201).json(idk);
//             });
//         })
//         .catch((error) => {
//             console.log(error);
//             res.status(500).json({ errorMessage: 'There was an error with POST of that account data' });
//         });
// });





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
