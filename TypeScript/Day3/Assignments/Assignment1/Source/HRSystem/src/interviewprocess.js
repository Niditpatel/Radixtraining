export var stck_arr = [];
export class Process {
    applyforjob(id, id2, arr1, arr2) {
        var jobapp = arr1.filter(item => {
            if (item.id === id) {
                arr2.filter(item1 => {
                    if (item1.id === id2) {
                        stck_arr.push({ "vacid": id, "applicant": item1 });
                    }
                    ;
                });
            }
        });
        return jobapp;
    }
}
export var newprocess = new Process();
