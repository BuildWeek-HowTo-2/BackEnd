 []
const router = require('express').Router();

const tutorials = require('./tutorialsModel');
const errorHandler = require('../utils/errorHandler');

router.get('/', (req, res) => {
  tutorials.get()
  .then((tutorials) => {
    res.status(200).json(tutorials)
  })
  .catch((err) => {
    errorHandler(res, err, 500, 'Unable to retrieve tutorials');
  });
});


router.get('/withsteps', (req, res) => {
  tutorials.getWithSteps()
  .then((tutorials) => {
    res.status(200).json(tutorials)
  })
  .catch((err) => {
    errorHandler(res, err, 500, 'Unable to retrieve tutorials');
  });
});



router.get('/:id', (req, res) => {
  const { id } = req.params; 
  tutorials
    .findById(id)
    .then(tutorials => {
      if (tutorials) {
        res.status(200).json(tutorials)
      } else {
        res.status(401).json({errMessage: 'no tutorials found by that instructor_id'})
      }
    })
    .catch((err) => {
      errorHandler(res, err, 500, 'Unable to retrieve tutorials');
    });
  })

router.get('/:id/directions', (req, res) => {
  const { id } = req.params; 
  tutorials
    .getDirectionsById(id)
    .then(directions => {
      if (directions) {
        res.status(200).json(directions)
      } else {
        res.status(401).json({errMessage: 'no tutorials found by that instructor_id'})
      }
    })
    .catch((err) => {
      errorHandler(res, err, 500, 'Unable to retrieve tutorials');
    });
  })

router.post('/', (req, res) => {
  const tutorialData =  req.body;
  const { id } = req.params;
  tutorials.insert(tutorialData)
  .then((tutorial) => {
    res.status(201).json(tutorial)
  })
})

router.put('/:id', (req, res) => {
  const tutorialData = req.body;
  const { id } = req.params;
  tutorials.update(id, tutorialData)
  .then((count) => {
    if (count > 0) {
      tutorials.getTutorialById(id)
      .then((post) => {
        res.status(200).json(post)
      })
    }
  })
})

router.delete('/:id', (req, res) => {
  tutorials.remove(req.params.id)
  .then(removed => {
    res.status(200).json(`message: you just liked this tutorial`)
  })
})


// router.get('/all', (req, res) => {
//   tutorials.find()
//   .then((tutorials) => {
//     res.status(200).json(tutorials)
//   })
//   .catch((err) => {
//     errorHandler(res, err, 500, 'Unable to retrieve tutorials');
//   });
// });

// router.get('/allinfo', (req, res) => {
//   tutorials.whoKnows()
//   .then((tutorials) => {
//   if(tutorials){
//     res.status(200).json(tutorials)
//   } else {
//     res.status(555).json("idk")
//   }
  
   
//   })
//   .catch((err) => {
//     errorHandler(res, err, 500, 'Unable to retrieve tutorials');
//   });
// });

// router.get('/allinfo', (req, res) => {

//   tutorials
//     .getwhoKnows()
//     .then(tutorials => {
//       console.log(tutorials)
//       if (tutorials) {
//         res.status(200).json(tutorials)
//       } else {
//         res.status(401).json({errMessage: 'no tutorials found by that instructor_id'})
//       }
//     })
//     .catch((err) => {
//       errorHandler(res, err, 500, 'Unable to retrieve tutorials');
//     });
//   })
// router.get('/', (req, res) => {
//   tutorials.get()
//   .then((tutorials) => {
//     res.status(200).json(tutorials)
//   })
//   .catch((err) => {
//     errorHandler(res, err, 500, 'Unable to retrieve tutorials');
//   });
// });
module.exports = router;