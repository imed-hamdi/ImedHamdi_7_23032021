const express = require('express');
const app = express();
const helmet =require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const usersRoutes = require('./routes/user');
const postsRoutes = require('./routes/post');
app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.listen(3000, () => {
console.log('Serveur activé ...');
})