// In App.js in a new project

import * as React from 'react';
import NavigationProvider from './src/navigation';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavigationProvider />
    </Provider>
  );
}

export default App;