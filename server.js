const express = require('express');
const app = express();
const helmet =require('helmet');
const usersRoutes = require('./routes/user');
const postsRoutes = require('./routes/post');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});
app.use(helmet());
app.use(express.json());
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);
app.listen(3000, () => {
    console.log('Serveur activé ...');
})