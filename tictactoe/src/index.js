import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }

    handleClick(i) {
      const squares = this.state.squares.slice();

      //Checking if game is complete or Square is filled, then no need to do anything else.
      if(calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    renderSquare(i) {
      return (
        <Square 
            value={this.state.squares[i]} 
            onClick = {() => this.handleClick(i)}
          />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner && winner !==0) {
        status = 'Winner: ' + winner;
      }
      else if(winner === 0) {
        status = "Game Draw";        
      } else {
        status = (this.state.xIsNext ? 'X' : 'O') + "'s turn";
      }      
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  //Helper function for Declaring a winnner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      //Here, checking if it is null or matches loop items' conditions for tictactoe
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }      

      //Checking for first 3 items of lines array (i.e. 3 rows of board) to see if filled => Draw      
      let rowComplete = Array(3).fill(null);
      if(i <= 2) {        
        if(squares[a] && squares[b] && squares[c]) {
          rowComplete[i] = true;
        }
        if(rowComplete[0] === rowComplete[1] === rowComplete[2]) {
          return 0;
        }
      }
    }

    return null;
  }

  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  