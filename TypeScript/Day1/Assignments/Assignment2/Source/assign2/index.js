// interface for the emp array 
// make the model_array type array and assign some values 
var emp_array = [
    { id: 1, FirstName: 'nidit', LastName: 'visaveliya', Address: '106 ahemadabad gujarat', salary: 30000 },
    { id: 2, FirstName: 'suresh', LastName: 'tripathi', Address: '308 ahemadabad gujarat', salary: 28000 },
    { id: 3, FirstName: 'mahesh', LastName: 'kyada', Address: '102 rajkot gujarat', salary: 30000 },
    { id: 4, FirstName: 'jagat', LastName: 'solanki', Address: '402 mumbai maharastra', salary: 35000 },
    { id: 5, FirstName: 'vijay', LastName: 'chaudhary', Address: '603 jamnagar gujarat', salary: 25000 },
];
// search emp by empid 
var Myelement = emp_array.find((element) => {
    if (element.id === 2) {
        return element;
    }
});
console.table(Myelement);
// add new emp to emp array 
emp_array.push({ id: 6, FirstName: 'sujay', LastName: 'choudhary', Address: '604 jamnagar gujarat', salary: 27000 });
console.table(emp_array);
// delete one emp from array index 1
emp_array.splice(1, 1);
console.table(emp_array);
// new array of model_array1 type 
var emp_final = [];
var emp = emp_array.forEach((item) => {
    const fullname = item.FirstName + item.LastName;
    const flatnumber = parseInt(item.Address.split(' ')[0]);
    const city = item.Address.split(' ')[1];
    const state = item.Address.split(' ')[2];
    const totalsalary = item.salary - ((item.salary) * 12) / 100;
    // adding values to new array after performing operations 
    emp_final.push({ fullname: fullname, flatnumber: flatnumber, city: city, state: state, totalsalary: totalsalary });
});
// console new emp_final
console.table(emp_final);
