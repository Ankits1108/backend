// importing express
const express = require('express');
const UserRouter = require('./routers/userRouter');


// initializing express
const app = express();
const port = 5000;

// middleware
app.use(express.json());
app.use('/user', UserRouter);


// accept and process request
// route
app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('response from add');
})

// getall
// delete
// update

// start the server
app.listen(port, () => {
    console.log('server started');
});