const express = require('express');
const expressHandlebars = require('express-handlebars');
const handlers = require('./lib/handlers');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
    extname: '.handlebars'
}));
app.set('view engine', 'handlebars');

app.get('/', handlers.home);

app.get('/', handlers.about);

app.use(handlers.notFound);

app.use(handlers.serverError);

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    'Press Ctrl-C to terminate'
));

