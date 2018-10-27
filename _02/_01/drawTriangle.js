/**
 * Pętlowy trójkąt
 * Napisz pętlę wywołującą siedem razy funkcję console.log i drukującą poniższy trójkąt:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 */

//draw Triangle with for loop
const drawTriangleForLoop = (num = 7, sign = '#') => {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += sign;
        console.log(str);
    }
}

//init with for loop function
drawTriangleForLoop();


//draw Triangle with while loop
const drawTriangleWhileLoop = (num = 7, sign = '#') => {
    let str = '';
    while (str.length < num) {
        str += sign;
        console.log(str);
    }
}

drawTriangleWhileLoop();


//draw Triangle with for loop
const drawTriangleDoWhileLoop = (num = 7, sign = '#') => {
    let str = '';
    do {
        str += sign;
        console.log(str);
    } while (str.length < num);
}

drawTriangleDoWhileLoop();

/**
 * MY NOTE:
 * All loops give the same results but works in diffrent way,
 * On this task best way will be while loop but for loop works also fine.
 *
 * I use do while loop only for practice and understand how its work but its not good method
 * to complete this tast
 */