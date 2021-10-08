const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.get('/*', (req, res) => {
	res.send(`Route doesn't exist`);
});

app.listen(3002, ()=>{
    console.log("Recipe listening:3002");
});

