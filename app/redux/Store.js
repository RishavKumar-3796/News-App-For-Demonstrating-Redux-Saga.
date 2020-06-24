import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../redux/reducers/index';
import rootSaga from '../saga/index';
import AsyncStorage from '@react-native-community/async-storage';
import {
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const navMiddleware = createReactNavigationReduxMiddleware(
    state => state.nav
);

const middleWareNav = [navMiddleware];

const persistConfig = {
    key: '@ProfessionalStructuring',
    storage: AsyncStorage,
    blacklist: ['nav']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add middleware to redux store
const store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleWare, ...middleWareNav))
);

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

// Enable persistence
export default { store, persistor };
