import React from "react";

const Rules = () => {
  return (
    <div>
      <h2>Rules:</h2>
      <br />
      <ol className='ruleList'>
        <li>
          1. Any live cell with fewer than two live neighbors dies, as if caused
          by under population.
        </li>
        <br />
        <li>
          2. Any live cell with two or three live neighbors lives on to the next
          generation.
        </li>
        <br />
        <li>
          3. Any live cell with more than three live neighbors dies, as if by
          overpopulation.
        </li>
        <br />
        <li>
          4. Any dead cell with exactly three live neighbors becomes a live
          cell, as if by reproduction.
        </li>
      </ol>
    </div>
  );
};

export default Rules;
