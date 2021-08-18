import styled from 'styled-components';
import { TextInput, Button, HelperText } from 'react-native-paper';
import image from '~/assets/form.png';

export const Input = styled(TextInput).attrs((_props) => ({
  theme: {
    colors: {
      primary: '#1a288b',
    },
  },
  mode: 'outlined',
}))`
  background-color: #f7f7f7;
  margin: 5px;
`;

export const InputError = styled(HelperText).attrs((_props) => ({}))`
  padding-top: 0px;
  color: #b00020;
`;

export const ButtonSend = styled(Button).attrs((_props) => ({
  theme: {
    colors: {
      primary: '#1a288b',
    },
  },
}))`
  padding: 5px;
  margin: 10px 25px 0px 25px;
`;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f7f7f7;
  flex-direction: column;
  justify-content: space-between;
`;

export const Animation = styled.View`
  height: 300px;
  justify-content: space-between;
  align-items: center;
`;

export const TextAnimation = styled.Text`
  font-size: 18px;
  font-weight: bold;
  position: absolute;
  color: #717171;
  text-align: center;
`;

export const FormContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
  background-color: #f7f7f7;
`;

export const Scroll = styled.ScrollView.attrs({
  disableScrollViewPanResponder: true,
})`
  background: #f7f7f7;
`;

export const ImageTop = styled.Image.attrs({
  source: image,
  resizeMode: 'cover',
})`
  height: 200px;
  width: 100%;
`;

export const ImageColor = styled.View`
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  background-color: #1a288b;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  color: #ffffff;
  z-index: 2;
  text-align: center;
  padding-bottom: 25px;
`;
