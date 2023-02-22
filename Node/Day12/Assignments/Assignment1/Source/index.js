const express =require('express');
const Studentrouter = require('./student/fees')
const {User}= require('./models/userModel');
const {Student} = require('./models/studentModel');
const {Employee} = require('./models/employeeModel');
const app = express();
app.disable('x-powered-by');

app.use('/',require('./Authentication/auth'));
app.use('/student',Studentrouter);
app.use('/employee',require('./employee/assignment'))
app.listen(3001,()=>{console.log('listing to the port ')});



const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Test')
    .then(() => { console.log('connected to mongodb.....') })
    .catch((e) => { console.log(e, "couldn't connect") });




// async function createUser() {

//     const user = new User({
//         "username": "neena",
//         "password": "neena",
//         "Role": "employee"
//     })

//     const result = await user.save();
//     console.log(result);
// }

async function createStudent(){
    const student = new Student({
        "ID": '6366196855693b682f1a80d6',
        "Name": "Gita",
        "Address": "Junagadh",
        "Fees": { "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "true" },
        "Result": { "Hindi": 83, "Eng": 72, "Math": 61, "Total": 216, "Grade": "A" }
 
        });
    const result = await student.save()
}

async function createEmployee(){
    const employee = new Employee({
        "ID": '63661a21f0249e93ba865e28',
        "Name": "neena",
        "Address": "Ahemadabad",
        "Assignment": { "Assign_name": "Asi3", "Status": "Panding" }
    });
    const result = await employee.save()
}

// createUser();
// createStudent();
// createEmployee();
// getUsers();