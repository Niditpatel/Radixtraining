"fileContents"


Start
step1: decalre variable datevalue 
step2: get the value of datevalue from user
step3: if dateValue.match(/^(0?[1 - 9]|1[0 -2])\/](0?[1 -9]| [ 1- 2] [0 -9] |3[0 1])[\ /]\d{4}$/) then alert invalid date else goto next step
step4: declare variables month,day,year and dateDigits 
step5: dateDigits = dateValue.split('/') and assign dateDigits[0 ] to month and dateDigits[1 ] to day and dateDigits[2 ] to year
step6: if month == 2 && day >29 then alert this month have only 29 days else goto step7
step7: if (month == 2 && day >28)&& !(year % 4 == 0) then alert this is not a leap year else goto step8
step8: if (month % 2 != 0) && day>30) then alert this mpnth have only 30 days else goto step9
step9: alert this is valid date
End 
