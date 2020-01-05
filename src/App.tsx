import React, { FC } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { About } from './modules/About';
import { TodoListPage } from './modules/TodoListPage';

const App: FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodoListPage} path="/" exact />
          <Route component={About} path="/about" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
