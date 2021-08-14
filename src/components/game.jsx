import React, { Component } from 'react';
import Board from './board'

class Game extends Component {
    render() {
        return (
            <div>
                <h1>Game Components</h1>
                <Board />
            </div>
        );
    }
}

export default Game;