"fileContents"

step1:start
step2:decalre variable size
step3:read value of n
step4:decalre the arr size of n
step5:initialize value zero into i
step6:if i<n gotostep7 if isn't goto step8
step7:read the value of arr and increase  value of i by one
step8: declare left ,right ,middle
step9: initialize middle=(left+right)/2
step10: if left<right goto next step 
step11: declare temp[right - left + 1] and poss , leftposition,rightposition
step12:assign value to  poss = 0 , lastposition=middle+1 and leftposition=left
step13: if (leftposition <= middle && rightposition <= right) then goto next step  else goto step16
step14: if (array[leftposition] < array[rightposition]) then do tmp[poss++] = array[leftposition++] else goto next step
step15: do  tmp[poss++] = array[rightposition++]
step16: if (leftposition <= middle) then do  tmp[poss++] = array[leftposition++] else goto next step
step17: if (rightposition <= right) then do   tmp[poss++] = array[rightposition++]; else goto next step
step18: reinitialize i=0
step19: if i<poss then do array[i + left] = tmp[i] and increase i by one  else goto next step
step20: reinitialize i with 1
step21: if i<size then print arr[i] and increase i by one else goto next step
step22: end the 