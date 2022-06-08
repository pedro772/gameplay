import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';

import { Header } from '../../components/Header';

import BannerImg from '../../assets/banner.png';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <>
      <Header
        title={ 'Detalhes' }
        action={
          <BorderlessButton>
            <Fontisto
              name={ 'share' }
              size={ 24 }
              color={ theme.colors.primary }
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={ BannerImg }
        style={ styles.banner }
      />
    </>
  );
}