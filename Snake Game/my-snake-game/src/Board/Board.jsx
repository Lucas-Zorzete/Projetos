import React, { useState } from 'react';  // importando a biblioteca React do react
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

class SinglyLinkedList {  // => estrutura lógica da cobra (interligada com o segmento da cobra)
    constructor(value) {
        const node = new LinkedListNode(value); // ==> valor do nó da primeira lista vai ser node
        this.head = node;  // ==> primeiro nó da lista (cabeça) 
        this.tail = node;  // ==> último nó da lista (cauda)
    };
};

const board_size = 10; // ==> tamanho da borda do campo em 10x10 células

const Board = () => {
    const [board, setBoard] = useState(createBoard(board_size)); // ==> guarda a matriz completa do jogo
    const [snakeCells, setSnakesCells] = useState(new Set([44])); // => guarda CÉLULAS que a cobra nasce
    const [snake, setSnake] = useState(new SinglyLinkedList([44]));
                                // guarda a ESTRUTURA LÓGICA da cobra começando na célula 44

    // EXIBINDO O TABULEIRO NA PÁGINA (HTML)
    return (
        <div className='board'>
            {board.map((row, rowIdx) => (  // ==> índices para cada linha ou números das linhas
                <div key={rowIdx} className="row">
                {  // key == detalhe técnico para React ir mais rápi
                // do
                    row.map((cellValue, cellIdx) => ( // ==> para cada célula, uma div (caixinha) é desenhada
                        <div 
                        key={cellIdx} 
                        className={`cell ${snakeCells.has(cellValue) ? 'snake-cell' : ''
                                        // SE a célula da cobra COM célula-valor -> ENTÃO ? -> SE NÃO :
                        }`}>{cellValue}</div>
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

export default Board; // exporta a sua função criada