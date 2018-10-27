/** TASK :
 * Napisz program drukujący za pomocą funkcji console.log wszystkie liczby od 1
 * do 100 z dwoma wyjątkami. Zamiast liczb podzielnych przez 3 wydrukuj słowo
 * Fizz, a zamiast liczb podzielnych przez 5 wydrukuj słowo Buzz.
 * Gdy już uda Ci się napisać taki program, zmień go tak, aby drukował napis
 * FizzBuzz zamiast liczb podzielnych zarówno przez 3, jak i przez 5.
 * (Jest to zadanie wykorzystywane podczas rozmów o pracę dla programistów,
 * przez które podobno odpada spory odsetek kandydatów. Jeśli więc udało Ci się
 * je rozwiązać, to masz powody do zadowolenia).
 */

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        let num = i;
        if (num % 3 == 0)
            num = 'Fizz';
        else if (num % 5 == 0)
            num = 'Buzz'
        console.log(num);
    }
}

fizzBuzz();