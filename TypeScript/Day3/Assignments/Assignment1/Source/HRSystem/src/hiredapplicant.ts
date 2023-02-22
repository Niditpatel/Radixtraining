import { applicant } from "./applicant";
import { interviewStack } from "./interview";

export interface SelectedPersonInfo extends applicant {
  salary: number;
  joinDate: string;
}
export class SelectedPerson {
  hiredStack: SelectedPersonInfo[] = [];

  createHiredPerson(obj: SelectedPersonInfo) {
 var interviewperson =  interviewStack.filter(item => {
      if (item.AppliId === obj.id) {
        if (item.clear === true) {
          this.hiredStack.push(obj);
        }
      }
      return item;
    })
    return interviewperson;
  }
  viewAllHired() {
    return this.hiredStack;
  }
  viewHiredbyId(id: number) {
    var findINd = this.hiredStack.findIndex((item) => item.id == id);
    console.log(this.hiredStack[findINd]);
  }
}