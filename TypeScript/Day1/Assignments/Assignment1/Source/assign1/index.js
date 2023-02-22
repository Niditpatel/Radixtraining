var emp_array = [
    { id: 1, FirstName: 'nidit', LastName: 'visaveliya', Address: '106 ahemadabad gujarat', salary: 30000 },
    { id: 2, FirstName: 'suresh', LastName: 'tripathi', Address: '308 ahemadabad gujarat', salary: 28000 },
    { id: 3, FirstName: 'mahesh', LastName: 'kyada', Address: '102 rajkot gujarat', salary: 30000 },
    { id: 4, FirstName: 'jagat', LastName: 'solanki', Address: '402 mumbai maharastra', salary: 35000 },
    { id: 5, FirstName: 'vijay', LastName: 'choudhary', Address: '603 jamnagar gujarat', salary: 25000 },
];
var Myelement = emp_array.find((element) => {
    if (element.id === 2) {
        return element;
    }
});
console.table(Myelement);
emp_array.push({ id: 6, FirstName: 'sujay', LastName: 'choudhary', Address: '604 jamnagar gujarat', salary: 27000 });
console.table(emp_array);
emp_array.splice(1, 1);
console.table(emp_array);
