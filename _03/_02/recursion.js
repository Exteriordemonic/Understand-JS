/**
 * Rekurencja
 *
 * Wiesz już, że operatora % (reszta z dzielenia) można używać do sprawdzania
 * tego, czy dana liczba jest parzysta, czy nieparzysta, za pomocą testu % 2, który
 * pozwala dowiedzieć się, czy wartość jest podzielna bez reszty przez 2, czy nie.
 * Oto inny sposób określenia, czy dodatnia liczba całkowita jest parzysta, czy
 * nieparzysta:
 * Funkcje 79
 *  Zero jest parzyste.
 *  Jedynka jest nieparzysta.
 *  Dla każdej innej liczby N jej parzystość jest taka sama jak dla N – 2.
 * Zdefiniuj rekurencyjną funkcję o nazwie isEven implementującą ten opis.
 * Funkcja ta powinna przyjmować parametr number i zwracać wartość logiczną.
 * Przetestuj ją na liczbach 50 i 75. Sprawdź, jak zadziała na liczbie –1.
 * Wiesz dlaczego tak? Umiesz to naprawić?
 */

const isEven = (num) => {
    console.log(num);
    if (num === 0) return true;
    else if (num === 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
}

/* TEST */
console.log(isEven(50)); // true
console.log(isEven(75)); // false 
console.log(isEven(-1)); // false

/**
 * MY NOTE :
 * I didint understand it until i didnt console log my number in function, now is clear for me :)
 * if number is highter than 1 its gona -2 untill wont be equal to 0 or -2
 * it was soo smart now I understand a bit more what is Recursion in JavaScript :)
 */