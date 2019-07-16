import React, { Component } from "react";
import Cell from "./Cell";

import "./Grid.css";

class Grid extends Component {
  state = {
    cells: [],
    interval: 100,
    isRunning: false,
    CELL_SIZE: 10,
    WIDTH: 500,
    HEIGHT: 500
  };

  rows = this.state.HEIGHT / this.state.CELL_SIZE;
  cols = this.state.WIDTH / this.state.CELL_SIZE;
  board = this.makeEmptyBoard();

  // Creates an empty board
  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    // console.log(board);
    return board;
  }

  // Create cells from this.board
  makeCells() {
    let cells = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
    return cells;
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  handleClick = event => {
    console.log("YO YO YO");
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / this.state.CELL_SIZE);
    const y = Math.floor(offsetY / this.state.CELL_SIZE);
    console.log(x, y);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({
      cells: this.makeCells()
    });
  };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });
    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  runIteration() {
    console.log("running iteration");
    let newBoard = this.makeEmptyBoard();
    // TODO: Add logic for each iteration here.
    this.board = newBoard;
    this.setState({ cells: this.makeCells() });
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  render() {
    return (
      <div>
        <div
          className='Board'
          style={{
            width: this.state.WIDTH,
            height: this.state.HEIGHT,
            backgroundSize: `${this.state.CELL_SIZE}px ${
              this.state.CELL_SIZE
            }px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {this.state.cells.map(cell => (
            <Cell
              CELL_SIZE={this.state.CELL_SIZE}
              x={cell.x}
              y={cell.y}
              key={`${cell.x}, ${cell.y}`}
            />
          ))}
        </div>
        <div className='controls'>
          Update every
          <input
            value={this.state.interval}
            onChange={this.handleIntervalChange}
          />{" "}
          msec{" "}
          {this.state.isRunning ? (
            <button className='button' onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className='button' onClick={this.runGame}>
              Run
            </button>
          )}{" "}
        </div>
      </div>
    );
  }
}

export default Grid;
