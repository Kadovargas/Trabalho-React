const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const booksRoute = require('./route/book/booksRoute');
const PublishersRoute = require('./route/publisher/publishersRoute');
const userRoute = require('./route/User/userRoute')
const loginRoute = require('./route/Login/loginRoute')

const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(booksRoute);
app.use(PublishersRoute);
app.use(userRoute);
app.use(loginRoute);
app.listen(3333);
