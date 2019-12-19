import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.js'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() { 
  return (
    <Provider store={store}>
    <div style={{textAlign:'center'}}>
      <CakeContainer />
      <HooksCakeContainer />
      <IceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
