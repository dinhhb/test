const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
const mainPageRoutes = require('./routes/main-page');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', mainPageRoutes);
app.get('/dish-detail', mainPageRoutes);
app.get('/dish-management', adminRoutes);

app.listen(3000);
