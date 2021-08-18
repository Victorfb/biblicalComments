import styled from 'styled-components';
import { Button } from 'react-native-paper';
import image from '~/assets/home.png';

export const ButtonCall = styled(Button).attrs((_props) => ({
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

export const ContainerButtons = styled.View`
  margin-bottom: 15px;
`;

export const ImageTop = styled.Image.attrs({
  source: image,
  resizeMode: 'cover',
})`
  height: 360px;
  width: 100%;
`;

export const ImageColor = styled.View`
  height: 360px;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  padding-left: 20px;
  padding-right: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  z-index: 2;
  text-align: center;
`;
