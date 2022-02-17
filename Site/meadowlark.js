const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    let randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    res.render('home', {fortune: randomFortune});
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

const fortunes = [
'Conquer your fears or they will conquer you',
'Rivers need springs',
'Do not fear what you do not know',
'You will have a pleasant surprise',
'You will die alone and poorly dressed'
];