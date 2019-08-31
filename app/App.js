import { createStackNavigator, createAppContainer } from 'react-navigation';

import { setNavigatorContainer } from '@utilities/navigator';
import Lobby from '@screens/Auth/Lobby';
import Registration from '@screens/Auth/Registration';
import Login from '@screens/Auth/Login';
import Home from '@screens/Home';

import { removeToken } from '@utilities/token';

const AppStackNavigator = createStackNavigator(
  {
    Lobby,
    Registration,
    Login,
    Home,
  },
  {
    initialRouteName: 'Lobby',
    ref: setNavigatorContainer,
  },
);

export default createAppContainer(AppStackNavigator);
