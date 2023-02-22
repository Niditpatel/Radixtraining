
import {Vacancy,VacancyList,vacancyClass  } from './vacancy';
import {applicant_array,applicant,Applicants } from "./applicant";
import { stck_arr,newprocess } from "./interviewprocess";
import {Interview,interviewStack} from "./interview";
import {SelectedPerson} from "./hiredapplicant";

var myvac = new vacancyClass();
console.log("-------------------vacancy-------------------");
var myvar: Vacancy = {
    id: 6,
    departmentName: 'React Native',
    designation: 'senior Developer',
    vacancyNo: 19,
    SalaryRange: '50000 to 62000',
    requireEdu: 'BE,ME,B.Tech,BCA,MCA',
    RequiredExp: 4
}
console.log("creating vacancy")

// create new vacancy 
myvac.createVacancy(myvar);
console.log(VacancyList);

console.log("view All vacancy")

// viewall vacancy 
myvac.viewAllVacancy();

console.log("view vacancy by id")

// view perticular vacancy 
console.log(myvac.viewVacancyById(3));


console.log("delete vacancy of php")
// delete vacancy of php 
myvac.deleteVacancy("PHP");
console.log(VacancyList);

console.log("ruduceing the number of opnings of garphic designer vacancy")

// reduce numbers of opnings 
myvac.reduceNoOfOpnings('Graphic Designer',5);

// update vacancy 
console.log("update vacancy")
myvac.updateVacancy({
    id: 6,
    departmentName: 'React Native',
    designation: 'junior Developer',
    vacancyNo: 5,
    SalaryRange: '40000 to 44000',
    requireEdu: 'BE,ME,B.Tech',
    RequiredExp: 10
},VacancyList);
console.table(VacancyList);

console.log("--------------------Applicant---------------------");

var app =new Applicants();

// create applicant 
console.log("create applicant");
var newapp:applicant={id:7,name:"Nidit patel",email:"niditd@gmail.com",exp:2};
app.createApplicant(newapp);
console.table(applicant_array);

// view all applicants
console.log("view all applicants") 
console.table(app.viewApplicants());

// view applicant by id 
console.log("view applicant by id");
console.log(app.viewApplicantById(2));

// delete applicant 
console.log("delete applicant which have  2 id number");
app.deleteApplicant(2);
console.log(applicant_array);


// update applicant
console.log("update applicant");
app.updateApplicant({id:3,name:"chandan",email:"chandan@gmail.com",exp:7},applicant_array);
console.table(applicant_array);

console.log("---------------apply for job ------------");
newprocess.applyforjob(2,1,VacancyList,applicant_array);
newprocess.applyforjob(2,4,VacancyList,applicant_array);
newprocess.applyforjob(2,3,VacancyList,applicant_array);
console.log(stck_arr);

console.log("----------------Scheduling interview --------------");
var newinterview = new Interview();
// add interview 
console.log("schedule new interview");
newinterview.addInterview({ Id: 13, AppliId:1, VacId:2, Date: '12-04-2022'});
console.log(interviewStack);

// view all scheduled interview 
console.log("view all scheduled interview ");
newinterview.viewallinterview();

// view perticluar interview 
console.log("view perticluar interview");
newinterview.viewinterview(11);

// update result 
console.log("update result");
newinterview.updateresult(13,true);
console.log(interviewStack);


console.log("-----------------hired person --------------")
var newhired = new SelectedPerson();
// add slected person 
console.log("add hired person");
newhired.createHiredPerson({id:1,name:"raman",email:"raman@gmail.com",exp:0,salary:28000,joinDate:"15-01-2023"});
console.log(newhired.hiredStack);
// view hired person 
console.log("view all hired person");
newhired.viewAllHired();
// view perticular hired person 
console.log(" view perticular hired person ");
newhired.viewHiredbyId(1);