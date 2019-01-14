import React, { Component } from 'react';
import Home from './container/home';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrash,faInfoCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,faInfoCircle)
class App extends Component {
  render() {
    return (
      <div className="App">
       <Home></Home>
      </div>
    );
  }
}

export default App;
