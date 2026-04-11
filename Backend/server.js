require("dotenv").config();
const app = require('./src/app');
const connectDB = require("./src/config/db");
const cors = require("cors");
const helmet = require("helmet");

//  all Protected route
const  signupRoutes  =  require("./src/routes/SignupRoutes");
const  loginRoutes = require("./src/routes/LoginRoutes");
const  CreateRouter = require('./src/routes/CreateRoutes');
const  DeleteRouter = require("./src/routes/DeleteRoutes");
const  UpdateRouter = require("./src/routes/UpdateRoutes");
const  GetallRouter = require("./src/routes/GetallRoutes");
const ContactRoutes = require("./src/routes/ContactRoutes");
const ClerkRoutes = require("./src/routes/ClerkRoutes");


// cors middleware  

app.use(cors({
    origin: "https://capstone-project-eight-green.vercel.app", ///  for security frontend origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));




// helmet middleware for security
app.use(helmet({
    crossOriginResourcePolicy: false
  }));



// MongoDB Connection 
connectDB();

// cors policy


// seperate APIs
app.use("/api", signupRoutes);  //http://localhost:5000/api/signup   for  the signup
app.use("/api", loginRoutes);   //http://localhost:5000/api/login     for the login
app.use("/api", CreateRouter);  //http://localhost:5000/api/create    for creating event
app.use("/api",  DeleteRouter);  //http://localhost:5000/api/delete/:id    for delete event
app.use("/api", UpdateRouter);    //http://localhost:5000/api/update/:id   for update events
app.use("/api", GetallRouter);    //http://localhost:5000/api/allevents     for the all events
app.use('/api', ContactRoutes); //http://localhost:5000/api/contact    for contact us
app.use("/api", ClerkRoutes);    //http://localhost:5000/api/clerk   it Eliminate the manual login process


 
const PORT =  process.env.PORT ||5000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});