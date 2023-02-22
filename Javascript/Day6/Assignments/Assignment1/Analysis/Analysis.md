"fileContents"

Start 
step1 :declare var and assign var fileData = await fetch( "https://dummyjson.com/products" ); 
step2: declare var and assign var displayData = await fileData.text();
step3: declare var and assign var displayobj = JSON.parse(displayData);
step4: declare var and assign  var myproducts = displayobj.products;
step5: let i = 0;
step6: make cards and also make two buttons named shoecart and addtocart 
step7: declare var arr 
step8: push the arr of product in arr on onclick on addtocart
step9: jsonData = JSON.stringify(arr);
step10: localStorage.setItem("myCart", jsonData);
step11: var consoleCart = localStorage.getItem("myCart");
step12: display consoleCart
End