const express = require("express");
const res = require("express/lib/response");
const app = express();
const AuthRoutes = require("./routes/auth");
const UserRoutes = require("./routes/user");

app.use(UserRoutes);

app.use(AuthRoutes);
// app.use('/index',(req,res,next)=>{
//   res.json({message:"Running via nodejs"})
//   next()
// })

app.listen(8000, () => {
  console.log("You are live !");
});
