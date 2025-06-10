import React, { useState } from 'react';  // importando a biblioteca React do react
// useState = componente importante para dar um estado (ação) para comportamentos

import './Board.css';  // importando o arquivo css

const board_size = 10; // tamanho da borda do campo em 10x10 células

// CRIANDO A MATRIZ
const Board = () => {
    const [board, setBoard] = useState(  // variável de estado board e função setBoard 
        new Array(board_size).fill(0).map(row => new Array(board_size).fill(0)),
        // cria             fill == preenche os        map == lê todos os elementos ==> faz a grade 10x10 
        //10 linhas                 elementos com 0  ==> célua vazia    
    );

    // CRIANDO O TABULEIRO
    return (
        <div className='board'>
            {board.map((row, rowIdx) => (  // índices para cada linha ou números das linhas
                <div key={rowIdx} className="row">
                {  // key == detalhe técnico para React ir mais rápido
                    row.map((cell, cellIdx) => { // ==> para cada célula, uma div (caixinha) é desenhada
                        <div key={cellIdx} className="cell"></div>
                    })
                }
                </div>
            ))}
        </div>
    )
};

export default Board; // exporta a sua função criada