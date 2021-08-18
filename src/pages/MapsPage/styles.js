import styled from 'styled-components';
import { Button } from 'react-native-paper';

export const ButtonMaps = styled(Button).attrs((_props) => ({
  theme: {
    colors: {
      primary: '#1a288b',
    },
  },
}))`
  padding: 5px;
  margin: 10px 25px 20px 25px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #000000;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
