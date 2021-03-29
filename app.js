const express = require('express');
const app = express();

const authRoutes = require('./routes/auth');
const activitiesRoutes = require('./routes/activities');
const eduEntitiesRoutes = require('./routes/eduentities');
const expensesRoutes = require('./routes/expenses');
const newsRoutes = require('./routes/news');
const placesRoutes = require('./routes/places');
const resultsRoutes = require('./routes/results');
const scheduleRoutes = require('./routes/schedule');
const statisticRoutes = require('./routes/statistic');
const participantsRoutes = require('./routes/participants');
const coachesRoutes = require('./routes/coaches');

app.use('./api/auth', authRoutes);
app.use('./api/activities', activitiesRoutes);
app.use('./api/eduentities', eduEntitiesRoutes);
app.use('./api/expenses', expensesRoutes);
app.use('./api/news', newsRoutes);
app.use('./api/places', placesRoutes);
app.use('./api/results', resultsRoutes);
app.use('./api/schedule', scheduleRoutes);
app.use('./api/statistic', statisticRoutes);
app.use('./api/participants', participantsRoutes);
app.use('./api/coaches', coachesRoutes);

module.exports = app;
