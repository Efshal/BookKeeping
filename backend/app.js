const express=require('express');
const app=express();
const dotenv=require('dotenv')
cors = require('cors');
bodyParser = require('body-parser')

dotenv.config({ path:'./confing.env'})
require('./DB/configdb')
const cookieParser =require('cookie-parser');
app.use(cors({origin:true, credentials:true})) 
const PORT=5000
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(PORT,()=>{
    console.log("listenig at ",PORT);
});
app.use(require('./apis/routes/adminRoute'))
app.use(require('./apis/routes/accountNonProfitRoute'))
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
const io = require("socket.io")(httpServer, options);
io.sockets.emit("hi", "everyone")
// io.on("connection", socket => { /* ... */ });

httpServer.listen(3000); 