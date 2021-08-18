import { Linking } from 'react-native';
import React from 'react';
import {
  Container,
  ContainerButtons,
  ImageColor,
  ImageTop,
  Title,
  ButtonCall,
} from './styles';
import { translate, I18nLocal } from '~/locales';

export default function HomePage() {
  function callPhone() {
    Linking.openURL('tel:34 655 05 02 34');
  }

  function callMessage() {
    Linking.openURL('sms:34 655 05 02 34');
  }

  function callEmail() {
    Linking.openURL('mailto:adjcptn@gmail.com');
  }

  return (
    <>
      <Container>
        <ImageColor>
          <ImageTop />
        </ImageColor>
        <Title>{translate(I18nLocal.CHURCH_NAME)}</Title>
        <ContainerButtons>
          <ButtonCall onPress={callPhone} icon="phone" mode="contained">
            {translate(I18nLocal.CALL)}
          </ButtonCall>
          <ButtonCall onPress={callMessage} icon="message" mode="contained">
            {translate(I18nLocal.MESSAGE)}
          </ButtonCall>
          <ButtonCall onPress={callEmail} icon="email" mode="contained">
            {translate(I18nLocal.EMAIL)}
          </ButtonCall>
        </ContainerButtons>
      </Container>
    </>
  );
}
