import React, {Component} from 'react';
import Home from './component/HomeComponent';
import { 
          createAppContainer, createStackNavigator,
          createBottomTabNavigator, createDrawerNavigator,
          createSwitchNavigator
        } from 'react-navigation';
import Login from './component/LoginComponent';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import lessonReducer from './redux/lessonReducer';
import ListLesson from './component/ListLesson';
import AddLesson from './component/AddLesson';

const store = createStore(lessonReducer)

const RootStack = createStackNavigator({
  list: {screen: ListLesson},
  home: {screen: Home},
  Add: {screen: AddLesson}
})

const RootBottom = createBottomTabNavigator({
  Stacks: {screen: RootStack}
})

const RootDrawer = createDrawerNavigator({
  Drawer: {screen: RootBottom},
  Login: {screen: Login}
})

const RootSwitch = createSwitchNavigator({
  
  // Login: {screen: Login},
   App: {screen: RootDrawer}
})

const AppContainer = createAppContainer(RootSwitch);
export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    )
  }
} 

