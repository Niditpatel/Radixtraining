#include <stdio.h>

int main(void) {
   
    int i, n;
   

    printf("Input the size of array :");
    scanf("%d", &n);
      int x[n];

    printf("Input %d elements in the array :\n", n);
    for (i = 0; i < n; i++) {
        printf("x[%d]: ", i);
        scanf("%d", &x[i]);
    }
      int fl = x[0];
      int sl = x[0];
    for (i = 0; i < n; i++) {
        if (fl < x[i]) {
            sl = fl;
            fl = x[i];
        } else
        if (x[i] > sl && x[i] != fl) {
            sl = x[i];
        }
    }

    if (sl == fl){
        printf(" your largest number  and second larget number is: %d %d" ,fl ,sl);
    }
    else{
        printf("\nThe Second largest element in the array is: %d", sl);
    }
    return 0;
}
