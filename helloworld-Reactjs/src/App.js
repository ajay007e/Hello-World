import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from './components/Index'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
