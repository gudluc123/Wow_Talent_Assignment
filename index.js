const express = require("express");
const app = express();
const mongoose = require("mongoose");

const userRoute = require("./src/models/routes/user");
const authRoute = require("./src/models/routes/auth");
const postRoute = require("./src/models/routes/post");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const mongoose = require('mongoose')

mongoose.connect(
    "mongodb+srv://booksManagementGroupX:B585MD3Oj7zq7y9i@cluster0.3babg.mongodb.net/booksManagement?retryWrites=true&w=majority", 
    {useNewUrlParser: true,useUnifiedTopology: true,  useCreateIndex: true}
)
    .then(() => console.log('mongodb is connected'))
    .catch(err => console.log(err))


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});