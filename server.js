const express = require("express");
const app = express();
// app.use(timeCheck=(req,res,next)=>{
//     let currentTime=new Date();
//     if (currentTime.getHours()>=8 && currentTime.getHours()<=17) {
//         app.use(express.static(__dirname+'/Public'))
//     }
//     else
//     {app.get('/',(req,res)=>{
//              res.sendFile(__dirname+'/Public/closed.html')
//          })};
//          next()
// })
// app.use(express.static(__dirname+'/Public'))



timeCheck = (req, res, next) => {
  let currentTime = new Date().getHours();
  console.log(currentTime)
  if (currentTime < 8 || currentTime > 17) {
      return res.sendFile(__dirname + "/Public/closed.html")
  }
  next();
};
app.get("/home",timeCheck,(req, res) => {
    res.sendFile(__dirname + "/Public/home.html");
  });
  app.get("/ourservices",timeCheck,(req, res) => {
    res.sendFile(__dirname + "/Public/ourservices.html");
  });
  app.get("/contact",timeCheck,(req, res) => {
    res.sendFile(__dirname + "/Public/contact.html");
  });

app.listen(3000, (err) => {
  if (err) console.log("server is not running");
  else console.log("server is runnig on port 3000");
});
