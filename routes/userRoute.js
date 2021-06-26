const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');

router.post('/register', (req, res) => {
  User.find({ email: req.body.email }, (err, docs) => {
    if (docs.length > 0) {
      return res.status(400).json({ message: 'Something Went Wrong' });
    } else {
      const newuser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      newuser.save((err) => {
        if (!err) {
          res.send('Your Registration Is Successful.');
        } else {
          res.send('Something Went Wrong.');
        }
      });
    }
    if (err) {
      return res.status(400).json({ message: 'Something Went Wrong' })
    }
  });
});

router.post('/login',(req,res)=> {
  User.find({email : req.body.email, password : req.body.password}, (err, docs)=>{
    if(docs.length>0)
    {
      const user = {
        name : docs[0].name,
        _id : docs[0]._id,
        email : docs[0].email,
      }
      res.send(user)
    }
    else{
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
  })
})
router.post('/update', (req, res) => {
  const { userid, updateduser } = req.body;

  User.findByIdAndUpdate(
    userid,
    {
      name: updateduser.name,
      email: updateduser.email,
      password: updateduser.password,
    },
    (err) => {
      if (err) {
        console.log(userid);
        return res.status(400).json({ message: 'Something went wrong' + err });
      } else {
        res.send('User details updated successfully');
      }
    }
  );
});

router.get('/getallusers', (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      return res.status(400).json({ message: 'something went wrong' });
    } else {
      res.send(docs);
    }
  });
});

router.post('/deleteuser', (req, res) => {
  User.findByIdAndRemove(req.body.userid, (err) => {
    if (err) {
      return res.status(400).json({ message: 'Something went wrong' });
    } else {
      res.send('User deleted successfully');
    }
  });
});

module.exports = router;
