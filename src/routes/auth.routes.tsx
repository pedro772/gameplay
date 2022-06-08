import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { Background } from '../components/Background';

import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      screenOptions={ {
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100,
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

      <Screen
        name='AppointmentDetails'
        component={ AppointmentDetails }
      />
    </Navigator>
  );
}