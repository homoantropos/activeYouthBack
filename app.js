const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');

const authRoutes = require('./routes/auth');
const activitiesRoutes = require('./routes/activities');
const eduEntitiesRoutes = require('./routes/eduentities');
const expensesRoutes = require('./routes/expenses');
const newsRoutes = require('./routes/news');
const placesRoutes = require('./routes/places');
const resultsRoutes = require('./routes/results');
const scheduleRoutes = require('./routes/schedule');
const reportsRoutes = require('./routes/report');
const participantsRoutes = require('./routes/participants');
const coachesRoutes = require('./routes/coaches');


mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoDB is connected'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/auth', authRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/eduentities', eduEntitiesRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/places', placesRoutes);
app.use('/api/results', resultsRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/reports', reportsRoutes);
app.use('/api/participants', participantsRoutes);
app.use('/api/coaches', coachesRoutes);

module.exports = app;
