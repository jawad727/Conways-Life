import React, { Component } from 'react';
import './Grid.css';
const CELL_SIZE = 10;
const WIDTH = 500;
const HEIGHT = 500;
class Grid extends Component {
    state = {
        cells: [],
    };

    rows = HEIGHT / CELL_SIZE;
    cols = WIDTH / CELL_SIZE;
    board = this.makeEmptyBoard();

    
    // Create an empty board
    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board}


    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells}


    render() {
        return (
            <div>
                <div
                    className='Board'
                    style={{
                        width: WIDTH,
                        height: HEIGHT,
                        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
                    }}
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}
                />
            </div>
        );
    }
}
export default Grid;