import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { Background } from '../components/Background';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={ {
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent',
        },
        cardOverlayEnabled: true,
        cardOverlay: () => (
          // Solução: https://github.com/react-navigation/react-navigation/issues/4759#issuecomment-774844254
          <Background>
          </Background>
        ),
      } }
    >
      <Screen 
        name='SignIn'
        component={ SignIn }
      />

      <Screen 
        name='Home'
        component={ Home }
      />
    </Navigator>
  );
}