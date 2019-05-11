import Home from './component/HomeComponent';
import { createAppContainer, createStackNavigator,
   createBottomTabNavigator, createDrawerNavigator,
    createSwitchNavigator
  } from 'react-navigation';
import Login from './component/LoginComponent';

const RootStack = createStackNavigator({
  home: {screen: Home}
})

const RootBottom = createBottomTabNavigator({
  Stacks: {screen: RootStack}
})

const RootDrawer = createDrawerNavigator({
  Drawer: {screen: RootBottom},
  Login: {screen: Login}
})

const RootSwitch = createSwitchNavigator({
  Login: {screen: Login},
  App: {screen: RootDrawer}
})

const App = createAppContainer(RootSwitch);
export default App;

