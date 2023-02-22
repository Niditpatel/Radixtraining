import { interviewStack } from "./interview";
export class SelectedPerson {
    constructor() {
        this.hiredStack = [];
    }
    createHiredPerson(obj) {
        var interviewperson = interviewStack.filter(item => {
            if (item.AppliId === obj.id) {
                if (item.clear === true) {
                    this.hiredStack.push(obj);
                }
            }
            return item;
        });
        return interviewperson;
    }
    viewAllHired() {
        return this.hiredStack;
    }
    viewHiredbyId(id) {
        var findINd = this.hiredStack.findIndex((item) => item.id == id);
        console.log(this.hiredStack[findINd]);
    }
}
