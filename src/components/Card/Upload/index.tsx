import {Modal} from 'react-native';
import {Container, ContainerText, Text} from './stytle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {useState} from 'react';
import {ModalUpload} from '../../Modal/UploadImage';

interface Props {
  Primary?: boolean;
  index?: number
}

export const CardUpload = ({Primary, index}: Props) => {
  const [visible, setVisible] = useState(false);

  const handleImage = () => {
    setVisible(true);
  };

  const pickFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
    };

    const result = await launchImageLibrary(options);
    if (result?.assets) {
      close();
      console.log(result.assets[0].uri);
    }
  };

  const pickFromCamera = async () => {
    const options: CameraOptions = {
      mediaType: 'photo',
      saveToPhotos: false,
      cameraType: 'front',
      quality: 1,
      includeBase64: true,
    };
    const result = await launchCamera(options);
    close();
    console.log(result);
  };

  const close = () => {
    setVisible(false);
  };

  return (
    <>
      <Modal transparent visible={visible}>
        <ModalUpload
          camera={() => pickFromCamera()}
          galery={() => pickFromGalery()}
          close={() => close()}
        />
      </Modal>
      <Container Primary={Primary} onPress={() => handleImage()}>
        <Icon name="smile-wink" size={Primary ? 80 : 50} color={'#EDE8ED'} />
        <ContainerText Primary={Primary}>
          <Text Primary={Primary}>+ Add</Text>
        </ContainerText>
      </Container>
    </>
  );
};
