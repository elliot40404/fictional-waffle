const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false, limit: '150mb' }));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});
app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on http://localhost:3000');
});