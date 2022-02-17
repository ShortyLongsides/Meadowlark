const express = require('express');
const expressHandlebars = require('express-handlebars');
const fortune = require('./lib/fortune');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => { 
    res.render('home', {fortune: fortune.getFortune});
});

app.get('/about', (req, res) => res.render('about'));

app.use((req,res) => {
    res.status(404);
    res.render('404');
});

app.use((req,res) => {
    res.status(500);
    res.render('500');
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    'Press Ctrl-C to terminate'
));

