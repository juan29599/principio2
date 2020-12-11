const express =require("express");
const morgan = require("morgan");
const app=express();
require('./server/config/dataBase');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/",require("./server/routes/routes"));

module.exports=app;
app.listen(8000,()=>{
    console.log("Servidor iniciado en http://localhost:8000");
});