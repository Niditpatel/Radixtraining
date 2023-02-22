import {Vacancy } from './vacancy';
import {applicant,} from "./applicant";

interface jobapplicants {
    vacid:number ;
    applicant:applicant;
}
export var stck_arr:jobapplicants[] = [];
export class Process {

    applyforjob(id:number,id2:number,arr1:Vacancy[],arr2:applicant[]){
     var jobapp =   arr1.filter(item =>{
            if(item.id === id){
                arr2.filter(item1 =>{
                    if(item1.id === id2){  
                        stck_arr.push({"vacid": id ,"applicant" :item1});
                    };
                    return item1;
                })
            }
        });
        return jobapp;
    }
}
export var newprocess = new Process();
