
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../configs/ReactotronConfig';
import reduxStore from '../redux/Store';
import RootContainer from './RootContainer';

const App = () => {
    return (
        <Provider store={reduxStore.store}>
            <PersistGate loading={null} persistor={reduxStore.persistor}>
                <RootContainer />
            </PersistGate>
        </Provider>
    )
        ;
};

// allow reactotron overlay for fast design in dev mode
export default __DEV__
    ? console.tron.overlay(App)
    : App;