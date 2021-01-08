import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';

import Component from './component/components';

console.log(Store.getState());
// wrapped root component in Provider and 
// then in BrowserRouter

function App() {
  return (
    <BrowserRouter>
      <Provider store={Store}>
        <div className="App">
          <Component />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
