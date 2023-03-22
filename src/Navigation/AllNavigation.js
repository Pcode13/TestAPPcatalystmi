import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import OnBording from '../Screens/OnBording';
import Home from '../Screens/Home';

const Stack = createStackNavigator();

const AllNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="">
        <Stack.Screen name="OnBording" component={OnBording} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllNavigation;
