/**
 * Napisz program tworzący łańcuch reprezentujący siatkę elementów o wymiarach
 * 8×8, używając znaków nowego wiersza do oddzielania poszczególnych wierszy.
 * 60 Roz d z i a ł 2
 * Na każdej pozycji siatki może być spacja albo znak #. Znaki te powinny tworzyć
 * planszę do gry w szachy.
 * Przekazanie tego łańcucha do funkcji console.log powinno dawać efekt
 * podobny do poniższego:
 * |# # # # |
 * | # # # #|
 * |# # # # |
 * | # # # #|
 * |# # # # |
 * | # # # #|
 * |# # # # |
 * | # # # #|
 * Po utworzeniu programu generującego taki wzór zdefiniuj zmienną size = 8
 * i tak zmodyfikuj program, aby dla dowolnej wartości tej zmiennej drukował
 * planszę o określonych wymiarach.
 */

const drawChessBoard = (num = 8) => {
    let board = '';

    if (num < 2)
        return new Error('Board is too small');
    // if (num % 2 != 0)
    //     return new Error('Size must be even');

    for (let i = 1; i <= num; i++) {
        let boardRow = '';

        while (boardRow.length < num) {
            if (i % 2 === 0)
                boardRow += ' #';
            else
                boardRow += '# ';
        }

        board += boardRow;

        if (i != num)
            board += '\n'
    }

    return board;
}

console.log(drawChessBoard()); //draw 8x8 board
console.log(drawChessBoard(16)); //draw 16x16 board
console.log(drawChessBoard(3)); //draw 4x4 board
console.log(drawChessBoard(2)); // Smallest board what you can get 2x2
console.log(drawChessBoard(1)); //Board is to small
console.log(drawChessBoard(5)); //Size need to be eval