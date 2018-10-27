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

    //minimum numer of rows is 2
    for (let i = 1; i <= num && num >= 2; i++) {

        //create boardRow
        let boardRow = '';
        while (boardRow.length < num) {
            if (i % 2 == 0)
                boardRow += ' #';
            else
                boardRow += '# ';
        }

        //push boradRow to Board
        board += boardRow;

        //add new lane tag
        if (i != num)
            board += '\n'
    }
    //Draw board
    console.log(board.length > 2 ? board : 'Board is too small :(');
}

drawChessBoard(); //draw 8x8 board
drawChessBoard(16) //draw 16x16 board
drawChessBoard(4) //draw 4x4 board
drawChessBoard(2) // Smallest board what you can get 2x2
drawChessBoard(1) //Board is to small