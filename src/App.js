import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import logo from './logo.svg';
import './App.css';

import UserContainer from './components/UserContainer';

function App() {
    console.log('1 . App - container');
  return (
    <Provider store={store}>
    <div className="App">
     
      <UserContainer/>
    </div>
    </Provider>
  );
}

export default App;
