import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetaiScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Signup: {
    screen: SignupScreen,
  },
  Home: {
    screen: MemoListScreen,
  },
  MemoDetail: {
    screen: MemoDetaiScreen,
  },
  MemoEdit: {
    screen: MemoEditScreen,
  },
}, {
  defaultNavigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#265366',
      textAlign: 'center',
    },
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitleStyle: {
      color: '#fff',
    },
  },
});


export default createAppContainer(App);
