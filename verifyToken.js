require('dotenv').config()
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    console.log(req.cookies)
    let token = req.cookies.jwt;
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser;
      console.log('req.user', req.user);
  
      next();
    });
};

// module.exports = verifyToken