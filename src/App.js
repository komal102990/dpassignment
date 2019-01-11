import React, { Component } from 'react';
import Home from './container/home';
import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrash,faLightbulb } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash,faLightbulb)
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
