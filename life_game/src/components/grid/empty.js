// class Game extends React.Component {
//       ...  render() {
//               const { cells } = this.state;    
//               return (      
//               <div>        
//                   <div className="Board"          
//                   style={{ width: WIDTH, height: HEIGHT,            
//                     backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`}}          
//                     onClick={this.handleClick}          
//                     ref={(n) => { this.boardRef = n; }}>          
//                     {cells.map(cell => (            
//                     <Cell x={cell.x} y={cell.y}                
//                     key={`${cell.x},${cell.y}`}/>          ))}        
//                     </div>              </div>    );  }  ...}