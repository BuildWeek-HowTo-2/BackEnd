module.exports = (req, res, next) => {
    if (!req.body) {
     res.status(400).json({ message: "Missing post data. Please ensure you sent the user's data." });
     } else if (!req.body.username || !req.body.password ) {
         res.status(400).json({ message: "Incomplete user data. Please include the user's username, password and role." });
     } else {
         next();
     }
 }

//  const validateUser = (req, res, next) => {
//   if (!req.body) {
//    res.status(400).json({ message: "Missing post data. Please ensure you sent the user's data." });
//    } else if (!req.body.username || !req.body.password ) {
//        res.status(400).json({ message: "Incomplete user data. Please include the user's username, password and role." });
//    } else {
//        next();
//    }
// }