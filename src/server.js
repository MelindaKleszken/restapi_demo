require('./db/connection');
const express = require('express');
const {postRouter} = require("./routes/post");
const {userRouter} = require("./routes/user");

//make sure to add 2 ports for listening: the users any port and your local port
const port = process.env.PORT || 5000;
const app = express();

//this will convert JSON to JavaScript
app.use(express.json());

app.use(userRouter);
app.use(postRouter);

//this allways goes to the end of server.js
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
