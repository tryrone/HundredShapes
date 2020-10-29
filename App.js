import React from 'react';
import PageOne from './components/pageOne/PageOne';
import PageTwo from './components/pageTwo/PageTwo';
import { createAppContainer } from 'react-navigation';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

const stackNavigator = createSharedElementStackNavigator(
  {
    Home: PageOne,
    Detail: PageTwo,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);

const App = createAppContainer(stackNavigator);

export default App;
