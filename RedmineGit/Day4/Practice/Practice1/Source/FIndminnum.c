#include <stdio.h>
  int main()
  {
      int  n, j, i, swap;
      printf("Enter number of elements\n");
      scanf("%d", &n);
      int arr[n];
      printf("Enter %d integers\n", n);
      for (i= 0; i < n; i++)
      {
          scanf("%d", &arr[i]);
      }  
      
      int min = arr[0];
      for(i=0;i<n;i++){
          if(arr[i]<min){
              min = arr[i] ;
          }
      }
      printf("minimum num of the arr is : ");
      printf("%d\n ",min);
      return 0;
  }