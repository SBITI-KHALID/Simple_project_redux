import React from 'react';
import { store } from './TP_redux/store';
import { Provider } from 'react-redux';
import AppRedux from './TP_redux/AppRedux';

function App() {
  return (
      <Provider store={store}>
        <AppRedux/>
      </Provider>
  )
}

export default App;
