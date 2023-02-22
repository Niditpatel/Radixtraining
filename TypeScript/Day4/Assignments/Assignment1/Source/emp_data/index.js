var emp1 = [{ id: 1, name: "raju", city: 'mumbai', doj: new Date("2022-01-11") }, { id: 2, name: "sanju", city: 'ahemadabad', doj: new Date("2017-01-11") }, { id: 3, name: "kaju", city: 'vadodara', doj: new Date("2024-01-11") }, { id: 4, name: "jaggu", city: 'rajkot', doj: new Date("2017-01-11") }];
class Employee {
    viewAllEmployee(arg) {
        console.table(arg);
    }
    viewEmpById(id, arg) {
        var viewbyid_array = arg.filter(item => {
            if (item.id === id) {
                return item;
            }
        });
        console.table(viewbyid_array);
    }
    viewEmpBYDoj(year, arg) {
        var empdoj_array = arg.filter(item => {
            if (item.doj.getFullYear() > year) {
                return item;
            }
        });
        console.table(empdoj_array);
    }
    viewEmpBYDojandCity(doj, city, arg) {
        var empdoj_array = arg.filter(item => {
            if (item.doj.getFullYear() > doj && item.city === city) {
                return item;
            }
        });
        console.table(empdoj_array);
    }
}
var newemployee = new Employee();
newemployee.viewAllEmployee(emp1);
newemployee.viewEmpById(2, emp1);
newemployee.viewEmpBYDoj(2020, emp1);
newemployee.viewEmpBYDojandCity(2020, "mumbai", emp1);
export {};
