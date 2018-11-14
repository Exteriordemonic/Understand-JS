/**
 * Minimum
 * 
 * W poprzednim rozdziale przedstawiłem standardową funkcję o nazwie Math.min
 * zwracającą najmniejszy argument. Teraz spróbujesz napisać taką funkcję
 * samodzielnie. Napisz funkcję o nazwie min przyjmującą dwa argumenty
 * i zwracającą mniejszy z nich.
 */ 

const min = (x,y) => {
    let result;
    if (x !== y)
        result = x > y ? y : x;
    else 
        result = 'VAL are equal';
    return result;
}

console.log(min('-1','2'));