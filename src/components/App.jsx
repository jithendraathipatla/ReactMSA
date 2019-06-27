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

        <main>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at interdum risus. Nulla dictum feugiat erat nec pretium.
              Suspendisse et turpis lectus. Mauris metus risus, vehicula eget
              magna eu, facilisis sagittis felis. Integer nulla justo, vulputate
              sit amet augue vitae, consectetur mollis lacus. Donec mollis
              ut dui id interdum. Donec sit amet justo ex.
            </p>
          </div>
        </main>
      </div>
    );
  }
};

export default App;
