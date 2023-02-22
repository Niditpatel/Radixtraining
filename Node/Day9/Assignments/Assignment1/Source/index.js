const express =require('express');
const Student = require('./student/fees')
// let port = process.env.PORT || 3000;
const app = express();
app.disable("x-powered-by");

app.use('/',require('./Authentication/auth'));
app.use('/student',Student);
app.use('/employee',require('./employee/assignment'))
app.listen(3001,()=>{console.log('listing to the port ')});