import styled from 'styled-components';
import IconVector from 'react-native-vector-icons/AntDesign';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
`;

export const ListContent = styled.View`
  background: #fff;
  width: 80%;
  height: 35%;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const List = styled.FlatList``;

export const ItemView = styled.View`
  flex-direction: row;
  background: #fff;
  margin-top: 20px;
  width: 100%;
  min-height: 75px;
`;

export const DescriptionView = styled.View`
  width: 80%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 2px;
  padding-bottom: 5px;
  padding-right: 5px;
`;

export const ImageView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.type === 'error' ? 'red' : 'yellow')};
  width: 20%;
`;

export const ItemTitle = styled.Text`
  color: #000;
  font-size: 14px;
  font-weight: 900;
  margin-left: 10px;
`;

export const ItemSubTitle = styled.Text`
  color: #c9c9c9;
  margin-left: 15px;
  font-size: 14px;
`;

export const ButtonClose = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #fff;
  position: absolute;
  top: 210px;
  right: 25px;
  z-index: 1;
`;

export const CloseView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CloseIcon = styled(IconVector).attrs({
  name: 'close',
  size: 20,
})``;

export const Scroll = styled.ScrollView.attrs({
  disableScrollViewPanResponder: true,
})``;
