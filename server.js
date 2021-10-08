require('dotenv').config()
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes');
app.use(cookieParser());

const verifyToken = (req, res, next) => {
    let token = req.cookies.jwt;
  
    console.log("Cookies: ", req.cookies.jwt);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
      if (err || !decodedUser) {
        return res.status(401).json({ error: "Unauthorized Request" });
      }
      req.user = decodedUser;
      console.log(decodedUser);
  
      next();
    });
};

app.use('/users', verifyToken, routes.users);


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/auth', routes.auth);
app.use('/users', routes.users);
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('users/index.ejs');
});

app.get('/*', (req, res) => {
	res.send(`Route doesn't exist`);
});

app.listen(process.env.PORT, () => {
	console.log('RecipeShare:3002');
});
