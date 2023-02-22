"fileContents"


start 
step1: declare a var array 
step2: if trigger push then declare var pushvalue and get the value from user 
step3: array.push() and display array
step4: if trigger pop then check array.length == 0 if true then alert no values for pop else array.pop() and display array
step5: if trigger shift then check array.length == 0 if true then alert no values for shift else array.shift() and display array
step6: if trigger unshift then declare var unshiftvalue and get the value from user and array(unshiftvalue) and display array
step7 : if trigger delete then decalre variables indexnoV and valuesV and get the values of it  from user
step8: if array.length < indexnoV+valuesV then show confirm box else goto step 10
step9: if confirm then do aray.splice(indexnoV,(array.length-indexnoV)) and display array else alert please take values in range ;
step10:  array.splice(indexnoV,valuesV); and display arrray 
End
