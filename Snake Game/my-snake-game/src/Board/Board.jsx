import React, { useEffect, useState } from 'react';  // importando a biblioteca React do react
// useState = componente importante para dar um estado (ação) para comportamentos

import './Board.css';  // importando o arquivo css

// LISTAS ENCADEADAS - PARA O DIRECIONAMENTO DA COBRA
class LinkedListNode {  // => segmento da cobra (cabeça e cauda)
    constructor(value) {
        this.value = value; // ==> o valor que eu definir vai ser guardado NESSE value
                                // a CABEÇA vai ser adicionada
        this.next = null;   // ==> o último valor apontará para nada (tail) 
                                // a CAUDA será removida
    };
};

class LinkedList {  // => estrutura lógica da cobra (interligada com o segmento da cobra)
    constructor(value) {
        const node = new LinkedListNode(value); // ==> valor do nó da primeira lista vai ser node
        this.head = node;  // ==> primeiro nó da lista (cabeça) 
        this.tail = node;  // ==> último nó da lista (cauda)
    };
};

class Cell {
    constructor(row, col, value) {
        this.row = row;
        this.col = col;
        this.value = value;
    }
};

const Direction = { // ==> guardando as direções existente pra cobra com TypeScript
    UP: 'UP',
    RIGHT: 'RIGHT',
    LEFT: 'LEFT',
    DOWN: 'DOWN',
};

const board_size = 10; // ==> tamanho da borda do campo em 10x10 células

const Board = () => {
    const [board, setBoard] = useState(createBoard(board_size)); // ==> guarda a matriz completa do jogo
    const [snakeCells, setSnakesCells] = useState(new Set([44])); // => guarda CÉLULAS que a cobra nasce
    const [snake, setSnake] = useState(new LinkedList(new Cell(4, 3, 44))); 
                                // guarda a ESTRUTURA LÓGICA da cobra começando na célula 44
    const [direction, setDirection] = useState(Direction.RIGHT); // ==> guarda as direções da cobra

    useEffect(() => {
        setInterval(() => {
            // moveSnake();
        }, 1000);

        window.addEventListener('keydown', (e) => { 
            const newDirection = getDirectionFromKey(e.key);
            const isValidDirection = newDirection !== '';  // ==> evite fazer nada se outra tecla for pressionada
            if (isValidDirection) setDirection(newDirection);  // => se pressionar corretamente, a cobra se move
        });
    }, []);

    function moveSnake() {
        const currentHeadCoords = {
            row: snake.head.value.row,
            col: snake.head.value.col,
        };

        const nextHeadCoords = getNextHeadCoords(currentHeadCoords, direction);
        const nextHeadValue = board[nextHeadCoords.row][nextHeadCoords.col];

        const newHead = new LinkedListNode(
            new Cell(nextHeadCoords.row, nextHeadCoords.col, nextHeadValue),
        );

        const newSnakeCells = new Set(snakeCells);
        newSnakeCells.delete(snake.tail.value.value);
        newSnakeCells.add(nextHeadValue);

        snake.head = newHead;
        snake.tail = snake.tail.next;
        if (snake.tail === null) snake.tail = snake.head;

        setSnakesCells(newSnakeCells);
    };

    const getNextHeadCoords = (currentHeadCoords, direction) => {
        if (direction === Direction.UP) {
            return {
                row: currentHeadCoords.row - 1,
                col: currentHeadCoords.col,
            };
        }
        if (direction === Direction.RIGHT) {
            return {
                row: currentHeadCoords.row,
                col: currentHeadCoords.col + 1,
            }
        }
        if (direction === Direction.LEFT) {
            return {
                row: currentHeadCoords.row,
                col: currentHeadCoords.col - 1,
            }
        }
        if (direction === Direction.DOWN) {
            return {
                row: currentHeadCoords.row + 1,
                col: currentHeadCoords.col,
            }
        }
    };

    // EXIBINDO O TABULEIRO NA PÁGINA (HTML)
    return (
        <div className='board'>
            <button onClick={() => moveSnake()}>Mover manualmente</button>
            {board.map((row, rowIdx) => (  // ==> índices para cada linha ou números das linhas
                <div key={rowIdx} className="row">
                {  // key == detalhe técnico para React ir mais rápi
                // do
                    row.map((cellValue, cellIdx) => ( // ==> para cada célula, uma div (caixinha) é desenhada
                        <div 
                        key={cellIdx} 
                        className={`cell ${snakeCells.has(cellValue) ? 'snake-cell' : ''
                                        // SE a célula da cobra COM célula-valor -> ENTÃO ? -> SE NÃO :
                        }`}></div>
                    ))
                }
                </div>
            ))}
        </div>
    )
};

// ENUMERANDO E CRIANDO A MATRIZ (TABULEIRO)
const createBoard = board_size => {  // ==> 10x10 células
    let counter = 1;  // ==> contador começa em 1
    const board = []; // ==> o campo como lista/array
  
    for (let row = 0; row < board_size; row++) {  // ==> for em JS (para cada linha/índice)
        const currentRow = []; // ==> linha atual como lista/array
        for (let col = 0; col < board_size; col++) {  // ==> o contador aumenta em 1 em 1
            currentRow.push(counter++);  // ==> adiciona o contador na lista da linha atual
        }
        board.push(currentRow); // ==> mostrar os números no campo em cada célula
    }
    return board;
};

const getDirectionFromKey = key => {  
    if (key === 'ArrowUp') return Direction.UP;
    if (key === 'ArrowRight') return Direction.RIGHT;
    if (key === 'ArrowLeft') return Direction.LEFT;
    if (key === 'ArrowDown') return Direction.DOWN;
    return '';
};

export default Board; // exporta a sua função criada