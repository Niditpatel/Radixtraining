export var VacancyList = [
    {
        id: 1,
        departmentName: 'PHP',
        designation: 'Trainee Software Engineer',
        vacancyNo: 10,
        SalaryRange: '28000 to 37000',
        requireEdu: 'BE,ME,B.Tech,BCA,MCA',
        RequiredExp: 0
    },
    {
        id: 2,
        departmentName: '.NET',
        designation: 'Junior Developer',
        vacancyNo: 7,
        SalaryRange: '42000 to 47000',
        requireEdu: 'BE,ME,B.Tech,BCA,MCA',
        RequiredExp: 2
    },
    {
        id: 3,
        departmentName: 'React,Node',
        designation: 'Trainee Software Engineer',
        vacancyNo: 15,
        SalaryRange: '28000 to 37000',
        requireEdu: 'BE,ME,B.Tech,BCA,MCA',
        RequiredExp: 0
    },
    {
        id: 4,
        departmentName: 'Mobile',
        designation: 'Assosiate Software Engineer',
        vacancyNo: 17,
        SalaryRange: '37000 to 42000',
        requireEdu: 'BE,ME,B.Tech,BCA,MCA',
        RequiredExp: 1
    },
    {
        id: 5,
        departmentName: 'Graphic Designer',
        designation: 'senior Developer',
        vacancyNo: 19,
        SalaryRange: '50000 to 62000',
        requireEdu: 'BE,ME,B.Tech,BCA,MCA',
        RequiredExp: 4
    }
];
export class vacancyClass {
    //  create vacancy 
    createVacancy(arg) {
        VacancyList.push(arg);
    }
    // view vacancy 
    viewAllVacancy() {
        console.table(VacancyList);
    }
    // view vacancy by id 
    viewVacancyById(id) {
        var singleVacancy = VacancyList.find((val) => (id === val.id));
        return singleVacancy;
    }
    // update vacancy 
    updateVacancy(arg, arg2) {
        var UpdateVac = arg2.filter(item => {
            if (item.id === arg.id) {
                arg2.splice(arg2.indexOf(item), 1, arg);
            }
        });
        return UpdateVac;
    }
    // delete vacancy 
    deleteVacancy(name) {
        var DelVac = VacancyList.filter((val) => {
            if (name === val.departmentName) {
                let dindex = VacancyList.indexOf(val);
                VacancyList.splice(dindex, 1);
            }
            return val;
        });
        return DelVac;
    }
    // reduce no of opnings 
    reduceNoOfOpnings(name, num) {
        for (let i in VacancyList) {
            if (VacancyList[i].departmentName == name) {
                if (VacancyList[i].vacancyNo > num) {
                    VacancyList[i].vacancyNo -= num;
                    console.table(VacancyList);
                }
            }
        }
    }
}
