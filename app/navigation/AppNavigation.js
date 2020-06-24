import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import NewsList from '../modules/Screens/NewsList';



const AuthStack = createStackNavigator(
  {
    NewsList,
  },
  {
    // Default config for all screens
    headerMode: 'none',
  },
);

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator(
  {
    AuthStack,
  },
  {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'AuthStack',
    navigationOptions: {},
  },
);

export default createAppContainer(PrimaryNav);
