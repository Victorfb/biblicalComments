import React from 'react';
import { Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { ButtonYouTube } from './styles';

export default function VideoPage() {
  function open() {
    Linking.openURL('vnd.youtube:/channel/UCZTm0SU6yvKVcwUxxMFr3aw');
  }
  return (
    <>
      <WebView
        source={{
          uri: 'https://www.youtube.com/channel/UCZTm0SU6yvKVcwUxxMFr3aw',
        }}
      />
      <ButtonYouTube onPress={open} icon="video" mode="contained">
        App YouTube
      </ButtonYouTube>
    </>
  );
}
