import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from '~/pages/HomePage';
import WebPage from '~/pages/WebPage';
import MapsPage from '~/pages/MapsPage';
import VideoPage from '~/pages/VideoPage';
import Form from '~/pages/Form';

export default () => {
  return createAppContainer(
    createBottomTabNavigator(
      {
        ADL: HomePage,
        Web: WebPage,
        Mapa: MapsPage,
        Video: VideoPage,
        Biblia: Form,
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state;
            let iconName;
            let color;
            if (routeName === 'ADL') {
              iconName = 'church';
              color = focused ? '#1a288b' : '#717171';
            } else if (routeName === 'Web') {
              iconName = 'web';
              color = focused ? '#1a288b' : '#717171';
            } else if (routeName === 'Mapa') {
              iconName = 'map-outline';
              color = focused ? '#1a288b' : '#717171';
            } else if (routeName === 'Video') {
              iconName = 'video-box';
              color = focused ? '#1a288b' : '#717171';
            } else if (routeName === 'Biblia') {
              iconName = 'book';
              color = focused ? '#1a288b' : '#717171';
            }

            return <Icon name={iconName} size={25} color={color} />;
          },
        }),
        tabBarOptions: {
          activeTintColor: '#1a288b',
          inactiveTintColor: '#717171',
        },
      }
    )
  );
};
