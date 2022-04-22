  import React, { Component } from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Lista from './components/lista/Lista';
  import Detalle from './components/detalle/Detalle';
  import Login from './components/login/Login';

  import {StyleSheet, Text, View, Image, Button, TextInput, TouchableOpacity,} from 'react-native';

  const Stack = createStackNavigator();

  const App = () => (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Lista" component={Lista} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  export default App;

  