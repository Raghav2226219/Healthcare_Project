const express= require("express");
const connectDb= require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const cors= require ("cors");
const hbs = require("hbs");
const path = require("path");

// env file config
const dotenv = require("dotenv");
dotenv.config();

connectDb();
const app = express();
const port= process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

//Error handling
app.use(errorHandler);


//Routes below
app.get("/",(req,res)=>{
    res.send("working")
});

app.set('view engine' , 'hbs');

app.get("/home",(req,res)=>{
    res.render("home",{
        users: [
            { username: "Harry", date: "23-10-2024", subject: "Maths" },
            { username: "Aarav", date: "25-10-2024", subject: "Science" },
            { username: "Garry", date: "26-10-2024", subject: "History" }
        ]
    })
})
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});