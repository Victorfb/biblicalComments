import React from 'react';

import { WebView } from 'react-native-webview';

export default function WebPage() {
  return (
    <>
      <WebView source={{ uri: 'https://www.facebook.com/ADLanzarote/' }} />
    </>
  );
}
