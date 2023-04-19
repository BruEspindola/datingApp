import Icon from 'react-native-vector-icons/MaterialIcons';
import {NextContainer} from './style';

interface Props {
  onPress: () => void;
}

export const NextButton = ({onPress}: Props) => {
  return (
    <NextContainer onPress={onPress}>
      <Icon name="arrow-forward" size={32} color={'#FFF'} />
    </NextContainer>
  );
};

