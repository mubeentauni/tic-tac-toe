import React from 'react';
import RootContainer from './components/Main.jsx';
// import './static/style/main.css';

class App extends React.Component {
  render() {
    return (
      <>
        <div id="tic-tac-toe">
          <RootContainer />
        </div>
      </>
    )
  }
}
export default App