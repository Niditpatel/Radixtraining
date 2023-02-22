"fileContents"

Strat
step1 : declare var jsondata 
step2: asign jsondata to JSON.strignify(mydata);
step3: localStorage.setItem("products", jsonData);
step4:   var getProducts = localStorage.getItem("products");
step5: display  getProducts
step6:  var fileData = await fetch(data);
step7:  var displayData = await fileData.text();
step8: display displaydata 
End