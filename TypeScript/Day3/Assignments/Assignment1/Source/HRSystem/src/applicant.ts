
export interface applicant {
    id:number;
    name:string;
    email:string;
    exp:number;
}

export var applicant_array :applicant[]=[
    {id:1,name:"raman",email:"raman@gmail.com",exp:0},
    {id:2,name:"ram",email:"ram@gmail.com",exp:3},
    {id:3,name:"shyam",email:"shyam@gmail.com",exp:0},
    {id:4,name:"jaggu",email:"jaggu@gmail.com",exp:5},
    {id:5,name:"raju",email:"raju@gmail.com",exp:2},
    {id:6,name:"naruto",email:"naruto@gmail.com",exp:1}
]

export class Applicants {

  // create applicant 
    createApplicant(obj: applicant) {
      applicant_array.push(obj);
    }

    // view all  applicants 
    viewApplicants() {
      return applicant_array;
    }

    // view single applicant 
    viewApplicantById(id: number) {
     var applicantbyid =  applicant_array.filter((value) =>{ if( value.id === id) {
      return value;
     }})
     return applicantbyid;
    }

    // delete an applicant 
    deleteApplicant(id:number){
      var Delapp =  applicant_array.filter((val) => {
            if (id === val.id) {
              let dindex =  applicant_array.indexOf(val);
              applicant_array.splice(dindex,1);
            }
            return val;
        })
        return Delapp;
    }

    // update applicant 
    updateApplicant(arg:applicant,arg2:applicant[]){
      var UpdateVac = arg2.filter(item =>{
            if(item.id === arg.id){
                arg2.splice(arg2.indexOf(item),1,arg);
            }
       })
       return UpdateVac ;
    }
  }