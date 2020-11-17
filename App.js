import React from 'react';
import Routes from './src/route/RootNavigator';
import {Store, persistor} from './src/store/Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        {/*  null passed to loading, persistor is being used here */}
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
