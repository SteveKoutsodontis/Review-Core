const path = require('path');
const express = require('express');

//TODO: Import routes here

const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3001;

const sequilize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequilize
    })
}

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// TODO: Link routes
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequilize.sync({force: false});
})
