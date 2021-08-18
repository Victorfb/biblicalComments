import React from 'react';
import openMap from 'react-native-open-maps';
import { WebView } from 'react-native-webview';
import { ButtonMaps, Title } from './styles';

export default function MapsPage() {
  function openMaps() {
    openMap({
      latitude: 28.9679233,
      longitude: -13.5591133,
      end: 'Calle El Bartolo, #6, Arrecife, Las Palmas, España',
    });
  }

  return (
    <>
      <WebView
        source={{
          uri: 'https://www.google.com/maps/place/Calle+el+Bartolo,+6,+35500+Arrecife,+Las+Palmas,+Espanha/@28.9679233,-13.5591133,19z/data=!3m1!4b1!4m5!3m4!1s0xc462771ae6d39bf:0xa41bbc2dc8615b46!8m2!3d28.9679221!4d-13.5585661',
        }}
      />
      <Title>{'Calle El Bartolo, #6, Arrecife,\n Las Palmas, España.'}</Title>
      <ButtonMaps onPress={openMaps} icon="map-outline" mode="contained">
        App Google Maps
      </ButtonMaps>
    </>
  );
}
