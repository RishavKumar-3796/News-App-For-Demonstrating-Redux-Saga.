import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import RestaurantList from '../modules/Screens/RestaurantList';



const AuthStack = createStackNavigator(
  {
    RestaurantList,
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
