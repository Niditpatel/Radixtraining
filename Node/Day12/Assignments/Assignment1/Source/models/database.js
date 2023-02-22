let users = [
    {
        "ID":1,
        "username":"Reena",
        "Password":"Reena",
        "Role":"student"
    },
    {
        "ID":2,
        "username":"Rita",
        "Password":"Rita",
        "Role":"student"   
    },
    {
        "ID":3,
        "username":"Sita",
        "Password":"Sita",
        "Role":"student"   
    },
    {
        "ID":4,
        "username":"Gita",
        "Password":"Gita",
        "Role":"student"   
    },
    {
        "ID":5,
        "username":"Rita1",
        "Password":"Rita1",
        "Role":"Employee"   
    },
    {
        "ID":6,
        "username":"neena",
        "Password":"neena",
        "Role":"Employee"   
    }
];
let students = [
    {
        "ID": 1,
        "Name": "Reena",
        "Address": "Ahmedabad",
        "Fees": { "Amount": 10000, "PaymentDate": "12/12/2020", "Status": "true" },
        "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }
    },
    {
        "ID": 2,
        "Name": "Rita",
        "Address": "Surat",
        "Fees": { "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "false" },
        "Result": { "Hindi": 81, "Eng": 73, "Math": 63, "Total": 217, "Grade": "A" }
    },
    {
        "ID": 3,
        "Name": "Sita",
        "Address": "Rajkot",
        "Fees": { "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "false" },
        "Result": { "Hindi": 82, "Eng": 71, "Math": 62, "Total": 215, "Grade": "A" }
    },
    {
        "ID": 4,
        "Name": "Gita",
        "Address": "Junagadh",
        "Fees": { "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "true" },
        "Result": { "Hindi": 83, "Eng": 72, "Math": 61, "Total": 216, "Grade": "A" }
    }
];
let Employees = [
    {
        "ID": 1,
        "Name": "Rita1",
        "Address": "surat",
        "Assignment": { "Asign_name": "Asi1", "Status": "Panding" }
    },
    {
        "ID": 2,
        "Name": "Geeta",
        "Address": "Rajkot",
        "Assignment": { "Asign_name": "Asi2", "Status": "Closed" }
    },
    {
        "ID": 3,
        "Name": "neena",
        "Address": "Ahemadabad",
        "Assignment": { "Asign_name": "Asi3", "Status": "Panding" }
    },
    {
        "ID":4,
        "Name":"Sita",
        "Address":"Junagadh",
        "Assignment":{"Asign_name":"Asi4","Status":"Closed"}
     }
];

module.exports ={students,users,Employees}