import Onboarding from '../screens/Onboarding';
import Login from '../screens/login';
import Signup from '../screens/signup';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

const screens = {
  Onboarding: {
    screen: Onboarding,
  },
  Login: {
    screen: Login,
  },
  Signup: {
    screen: Signup,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
