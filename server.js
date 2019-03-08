const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const dotenv = require('dotenv')
const firebase = require('firebase');
const app = express();
const port = process.env.PORT || 8080;
const API_KEY = process.env['API_KEY'];
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html'); 


// const webpack = require('webpack');
// const webpackHotMiddleware = require('webpack-hot-middleware')
// const webpackDevMiddleware = require('webpack-dev-middleware');

// const devConfig = require('./webpack.config.js');
// const compiler = webpack(devConfig);
          
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(DIST_DIR));
dotenv.config();

// app.use(webpackDevMiddleware(compiler, {
//   noInfo: true,
//   publicPath: devConfig.output.publicPath
// }))


// app.use(webpackHotMiddleware(compiler));

const config = {
    apiKey: API_KEY,
    authDomain: "contact-form-9996f.firebaseapp.com",
    databaseURL: "https://contact-form-9996f.firebaseio.com",
    projectId: "contact-form-9996f",
    storageBucket: "contact-form-9996f.appspot.com",
    messagingSenderId: "917336631314"
};

firebase.initializeApp(config);
const messagesRef = firebase.database().ref('messages');

// app.get('*', (req, res, next) =>  res.send(HTML_FILE))

// app.use('*', function (req, res, next) {
//   var filename = path.join(compiler.outputPath,'index.html');
//   compiler.outputFileSystem.readFile(filename, function(err, result){
//     if (err) {
//       return next(err);
//     }
//     res.set('content-type','text/html');
//     res.send(result);
//     res.end();
//   });
// });

app.post('/', (req, res) => {	
	name = req.body.name;
    email = req.body.email;
    message = req.body.message;
    if(!message || !name) {
		res.redirect('/error');
	} 
    const newMessagesRef = messagesRef.push()
    newMessagesRef.set({
        name: name,
        email: email,
        message : message
    });

});

app.listen(port, () => console.log(`Listening on http://localhost:${port}/`));







