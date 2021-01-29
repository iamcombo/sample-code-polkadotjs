import Header from './components/Header';
import Home from './pages/Home';
import Transaction from './pages/Transaction';
import CreateAccount from './pages/CreateAccount';
import ImportAccount from './pages/ImportAccount';
import Draft from './pages/draft';

import './App.css';
import {
  BrowserRouter as
  Router,
  Route,
  Switch,
} from 'react-router-dom';


export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className='app__container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/transaction' component={Transaction} />
            <Route exact path='/createaccount' component={CreateAccount} />
            <Route exact path='/importaccount' component={ImportAccount} />
            <Route exact path='/draft' component={Draft} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}