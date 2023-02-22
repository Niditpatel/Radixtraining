const mongoose = require('mongoose');
const express = require('express');
const { User } = require('./models/User');
const { Assistant } = require('./models/assitant');
const { Department } = require('./models/departmet');
const { Doctor } = require('./models/doctor');
const { Drug } = require('./models/drug');
const { Patient } = require('./models/patient');


const app = express();
app.disable('x-powered-by');

app.use('/', require('./Authentication/auth'));
app.use('/doctor', require('./routes/doctor'));
app.use('/assistant', require('./routes/assistant'));
// Department.insertMany([
//     {deptName:"psychiatry"},
//     {deptName:"Surgical department"},
//     {deptName:"dental"},
//     {deptName:"eye"},
//     {deptName:"cardiology"},
//     {deptName:"neurology"},
//     {deptName:"orthopaedics"},
//     {deptName:"gynaecology"},
//     {deptName:"skin"}
// ])

// Assistant.insertMany([
//     {
//         AssistantName: "ravi",
//         Department:[{ID:"636b88a4f423f865c75b36ba"}]
//     },
//     {
//         AssistantName: "navin",
//         Department:[{ID:"636b88a4f423f865c75b36bb"},{ID:"636b88a4f423f865c75b36be"},{ID:"636b88a4f423f865c75b36c1"}]
//     },
//     {
//         AssistantName: "chaman",
//         Department:[{ID:"636b88a4f423f865c75b36ba"}]
//     },
//     {
//         AssistantName: "chagan",
//         Department:[{ID:"636b88a4f423f865c75b36bb"}]
//     },
//     {
//         AssistantName: "dhaval",
//         Department:[{ID:"636b88a4f423f865c75b36bc"}]
//     },
//     {
//         AssistantName: "chomu",
//         Department:[{ID:"636b88a4f423f865c75b36bb"}]
//     },
//     {
//         AssistantName: "naman",
//         Department:[{ID:"636b88a4f423f865c75b36ba"}]
//     },
//     {
//         AssistantName: "satish",
//         Department:[{ID:"636b88a4f423f865c75b36bb"},{ID:"636b88a4f423f865c75b36bc"}]
//     },
//     {
//         AssistantName: "matish",
//         Department:[{ID:"636b88a4f423f865c75b36ba"}]
//     }
// ])

// Drug.insertMany([
//     {
//         DrugName:"Almotriptan",
//         power: "20w",
//         Price: 80 
//     },
//     {
//         DrugName:"Aspirin",
//         power: "25w",
//         Price: 85
//     },
//     {
//         DrugName:"percitamol",
//         power: "10w",
//         Price: 20
//     },
//     {
//         DrugName:"Ibuprofen",
//         power: "35w",
//         Price: 45
//     },{
//         DrugName:"Metamizole",
//         power: "55w",
//         Price: 55
//     },{
//         DrugName:"Propyphenazone",
//         power: "17w",
//         Price: 90
//     },{
//         DrugName:"Zaltoprofen",
//         power: "24w",
//         Price: 115
//     }
// ])

// Doctor.insertMany([
//     {
//         DoctorName: "raju" ,
//         Age: 25,
//         Deptartment: [{ID:"636b88a4f423f865c75b36ba"},{ID:"636b88a4f423f865c75b36bb"}]
//     },
//     {
//         DoctorName: "kaju" ,
//         Age: 25,
//         Deptartment: [{ID:"636b88a4f423f865c75b36c1"},{ID:"636b88a4f423f865c75b36bf"}]
//     },
//     {
//         DoctorName: "sanju" ,
//         Age: 25,
//         Deptartment: [{ID:"636b88a4f423f865c75b36ba"},{ID:"636b88a4f423f865c75b36c1"}]
//     },
//     {
//         DoctorName: "manju" ,
//         Age: 25,
//         Deptartment: [{ID:"636b88a4f423f865c75b36be"},{ID:"636b88a4f423f865c75b36c1"}]
//     }
// ])

// Patient.insertMany([
//     {
//         PatientName:"ravi",
//         Age: 15,
//         Address: "Ahemadabad",
//         Department: [{ID:"636b88a4f423f865c75b36ba"}],
//         Doctor: [{ID:"636b999d9ee0b8a9b6a75af8"}],
//         Drug: {
//             Morning: [{ID:"636b8ff723e9c7b6eaaea948"},{ID:"636b8ff723e9c7b6eaaea949"}],
//             Afternoon: [{ID:"636b8ff723e9c7b6eaaea94b"},{ID:"636b8ff723e9c7b6eaaea948"}],
//             Night: [{ID:"636b8ff723e9c7b6eaaea948"},{ID:"636b8ff723e9c7b6eaaea94d"}]
//         },
//         Assistant: [{ID:"636b8dab45cb33c2ef442edf"}]
//     }
// ])

// async function abc(){

// const data = await Drug.aggregate([
//     { "$project": {
//       "max": {
//         "$arrayElemAt": [
//           "$array",
//           {
//             "$indexOfArray": [
//               "$array.Price",
//               { "$max": "$array.Price" }
//             ]
//           }
//         ]
//       }
//     }}
//   ]);
//   console.log(data)

// }

// abc();

const db = mongoose.connect('mongodb://localhost/Hospital')
    .then(() => console.log('database connected....'))
    .catch(e => console.log(e.message));


app.listen(3000, () => console.log('listing on the server.....'));