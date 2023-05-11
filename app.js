const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
const mainPageRoutes = require('./routes/main-page');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainPageRoutes);
app.use(adminRoutes);
app.use(userRoutes);
app.use(authRoutes);

app.listen(3000);
