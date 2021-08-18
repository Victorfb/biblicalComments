import styled from 'styled-components';
import { Button } from 'react-native-paper';

export const ButtonYouTube = styled(Button).attrs((_props) => ({
  theme: {
    colors: {
      primary: '#1a288b',
    },
  },
}))`
  padding: 5px;
  margin: 10px 25px 20px 25px;
`;
