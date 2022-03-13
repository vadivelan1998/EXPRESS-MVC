const express=require("express")

const usersController=require("./controllers/users.controllers")

const studentsController = require("./controllers/students.controller");

const batchController = require("./controllers/batch.controller");

const evaluationController=require("./controllers/evaluation.controller")

const submissionController=require("./controllers/submission.controller")




const app=express();

app.use(express.json());

app.use("/users",usersController)
app.use("/students", studentsController);
app.use("/batchs",batchController)
app.use("/evaluations",evaluationController)
app.use("/submissions",submissionController)


module.exports=app