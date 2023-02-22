// map 
let nameAgeMapping = new Map();
nameAgeMapping.set("Ram", 37);
nameAgeMapping.set("Raju", 35);
nameAgeMapping.set("Jaggu", 40);
let age = nameAgeMapping.get("Raju");
console.log(age);
nameAgeMapping.has("Ram");
nameAgeMapping.has("Bhim");
let count = nameAgeMapping.size;
let isDeleted = nameAgeMapping.delete("Jaggu");
// nameAgeMapping.clear();	
for (let key of nameAgeMapping.keys()) {
    console.log(key);
}
for (let value of nameAgeMapping.values()) {
    console.log(value);
}
for (let entry of nameAgeMapping.entries()) {
    console.log(entry[0], entry[1]);
}
for (let [key, value] of nameAgeMapping) {
    console.log(key, value);
}
// ------------------------------------
// set 
let diceEntries = new Set();
diceEntries.add(1);
diceEntries.add(2);
diceEntries.add(3);
diceEntries.add(4).add(5).add(6);
diceEntries.has(1);
diceEntries.has(10);
// diceEntries.size;
diceEntries.delete(6);
// diceEntries.clear(); 
for (let currentNumber of diceEntries) {
    console.log(currentNumber);
}
diceEntries.forEach(function (value) {
    console.log(value);
});
// -------------------------------------
// date 
let myDate = new Date();
console.log(myDate);
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getUTCDate());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
