import { stck_arr } from "./interviewprocess";
export interface Interviewerinfo {
  Id: number;
  AppliId: number;
  VacId: number;
  Date: string;
  clear?: boolean;
}
export var interviewStack: Interviewerinfo[] = [{
  Id: 10,
  AppliId: 1,
  VacId: 4,
  Date: '10-02-2022'
},
{
  Id: 11,
  AppliId: 4,
  VacId: 1,
  Date: '10-02-2022'
}];
export class Interview {

  // Schedule interview 
  addInterview(add: Interviewerinfo) {
   var schedule = stck_arr.find((item) => {
      if (item.applicant.id === add.AppliId) {
        if (item.vacid === add.VacId) {
          interviewStack.push(add);
        }
      }
      return item;
    });
    return schedule;
  }
  // view all seheduled interview 
  viewallinterview() {
    console.log(interviewStack);
  }

  // view perticular interview
  viewinterview(id: number) {
    for (let i in interviewStack) {
      if (interviewStack[i].Id == id) {
        let interview = interviewStack[i];
        console.log(interview);
      }
    }
  }

  // update status 
  updateresult(id: number, result: boolean) {
    for (let i in interviewStack) {
      if (interviewStack[i].Id == id) {
        interviewStack[i].clear = result;
      }
    }
  }
}