require('dotenv').config();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const routes = require('./routes');
const verifyToken = (req, res, next) => {
	let token = req.cookies.jwt;

	console.log('Cookies: ', req.cookies.jwt);

	jwt.verify(token, process.env.JWT_SECRET, (err, decodedUser) => {
		if (err || !decodedUser) {
			return res.status(401).json({ error: 'Unauthorized Request' });
		}
		req.user = decodedUser;
		console.log('req.user', req.user);

		next();
	});
};
const Recipe = require('./models').Recipe;

app.use(cookieParser());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
	Recipe.findAll().then((recipes) => {
		res.render('users/index.ejs', {
			recipes,
		});
	});
});
app.use('/users', verifyToken, routes.users);
app.use('/auth', routes.auth);
app.use('/recipes', verifyToken, routes.recipes);
app.use(express.static('public'));

app.get('/*', (req, res) => {
	res.send(`Route doesn't exist`);
});

app.listen(process.env.PORT, () => {
	console.log('RecipeShare:3002');
});
