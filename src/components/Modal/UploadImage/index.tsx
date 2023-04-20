import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {
  Btn,
  BtnContainer,
  BtnTitle,
  CloseButton,
  CloseContainer,
  IconContainer,
  Modal,
  ModalContainer,
} from './style';

interface Props {
  close: () => void;
  camera: () => void;
  galery: () => void;
}

export const ModalUpload = ({close, camera, galery}: Props) => {
  return (
    <>
      <CloseContainer>
        <CloseButton onPress={close}>
          <Icon name="close" size={30} color={'#fff'} />
        </CloseButton>
      </CloseContainer>
      <ModalContainer>
        <Modal
          style={{
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 3,
            shadowColor: '#000',
          }}>
          <IconContainer>
            <Icon name="camera" size={40} color={'#FFF'} />
          </IconContainer>

          <BtnContainer>
            <Btn onPress={camera}>
              <BtnTitle>Camera</BtnTitle>
            </Btn>
            <Btn onPress={galery}>
              <BtnTitle>Galeria</BtnTitle>
            </Btn>
          </BtnContainer>
        </Modal>
      </ModalContainer>
    </>
  );
};
