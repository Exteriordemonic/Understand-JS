/**
 * Liczenie znaków
 *
 * Z łańcucha można pobrać znak o dowolnym numerze N za pomocą wyrażenia
 * "łańcuch".charAt(N) — podobnie sprawdza się długość łańcuchów za pomocą
 * wyrażenia "s".length. Zostanie zwrócona wartość w postaci jednego znaku (np.
 * "a"). Pierwszy znak ma numer zero, w związku z czym ostatni znajduje się na
 * pozycji o numerze string.length - 1. Innymi słowy, dwuznakowy łańcuch ma
 * długość (length) 2, a tworzące go znaki znajdują się na pozycjach o numerach 0 i 1.
 * Napisz funkcję o nazwie CountBs pobierającą łańcuch jako jedyny argument
 * i zwracającą liczbę wielkich liter B w tym łańcuchu.
 * Następnie napisz funkcję o nazwie countChar działającą podobnie jak countBs,
 * tylko przyjmującą dodatkowy argument określający znak, którego wystąpienia
 * mają być policzone. Przepisz funkcję countBs, aby wykorzystać tę nową funkcję.
 */

const countChar = (str, regex) => {
    const reg = new RegExp(regex, 'g');
    const result = str.toString().match(reg);
    if (result) return result.length;
    else return 0;
}

const countBs = (str) => {
    return countChar(str,'B');
}


console.log(countBs("BBCb"));
// → 2
console.log(countChar("kakkerlak", "k"));