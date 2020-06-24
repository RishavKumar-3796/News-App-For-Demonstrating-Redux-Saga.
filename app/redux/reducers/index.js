import { combineReducers } from 'redux';
import {
    createNavigationReducer
} from 'react-navigation-redux-helpers';
import AppNavigation from '../../navigation/AppNavigation';

const navReducer = createNavigationReducer(AppNavigation);

// Imports: Reducers
import auth from './Auth';

// Redux: Root Reducer
const rootReducer = combineReducers({
    nav: navReducer,
    auth: auth
});

// Exports
export default rootReducer;
