var express = require('express');
var router = express.Router();
const User = require('../models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(users);
    }
  });

  res.render('index', { title: 'Express' });
});

module.exports = router;
