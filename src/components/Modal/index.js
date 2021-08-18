// import React from 'react';
// import { Modal } from 'react-native';
// import PropTypes from 'prop-types';
// import {
//   Container,
//   ListContent,
//   ButtonClose,
//   CloseIcon,
//   CloseView,
//   Scroll,
// } from './styles';

// export default function ModalInfo({ visible, children, close }) {
//   return (
//     <Modal animationType="fade" visible={visible} transparent>
//       <Container>
//         <ButtonClose onPress={close}>
//           <CloseView>
//             <CloseIcon />
//           </CloseView>
//         </ButtonClose>
//         <ListContent>{children}</ListContent>
//       </Container>
//     </Modal>
//   );
// }

// ModalInfo.propTypes = {
//   visible: PropTypes.bool,
//   close: PropTypes.func.isRequired,
// };
// ModalInfo.defaultProps = {
//   visible: false,
// };

import React from 'react';
import { Dialog, Portal } from 'react-native-paper';
import PropTypes from 'prop-types';

export default function ModalInfo({ visible, children, onDismiss }) {
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={onDismiss}>
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog>
    </Portal>
  );
}

ModalInfo.propTypes = {
  visible: PropTypes.bool,
};
ModalInfo.defaultProps = {
  visible: false,
};
