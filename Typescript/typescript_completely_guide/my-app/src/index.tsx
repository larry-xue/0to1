import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color?: string;
}

// class App extends React.Component<AppProps> {
//   // redefine state statement
//   state = { count: 0 };
//   increaseCount = (): void => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };
//   decreaseCount = (): void => {
//     this.setState({
//       count: this.state.count - 1,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <div>{this.props.color}</div>
//         <div>
//           <button onClick={this.increaseCount}>Increasement</button>
//           <button onClick={this.decreaseCount}>Decreasement</button>
//         </div>
//         <div>count: {this.state.count}</div>
//       </div>
//     );
//   }
// }

const App = (props: AppProps) => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div>{props.color}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Increasement</button>
        <button onClick={() => setCount(count - 1)}>Decreasement</button>
      </div>
      <div>count: {count}</div>
    </div>
  );
};

ReactDOM.render(<App color='red'></App>, document.getElementById('root'));
