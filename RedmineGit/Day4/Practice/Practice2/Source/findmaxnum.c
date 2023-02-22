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
        
        int max = arr[0];
        for(i=0;i<n;i++){
            if(arr[i]>max){
                max = arr[i] ;
            }
        }
        printf("maximum num of the arr is : ");
        printf("%d\n ",max);
        return 0;
    }