import React from 'react';
import Navbar from './NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
};

export default App;
