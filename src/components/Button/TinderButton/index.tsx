import {Button, Container} from './style';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';

export const TinderButton = () => {
  return (
    <Container>
      <Button type={'restore'}>
        <MaterialIcon name={'restore'} size={30} color={'#F3D677'} />
      </Button>

      <Button Principal type={'close'}>
        <Icon name={'close'} size={40} color={'#f1606a'} />
      </Button>

      <Button type={'star'}>
        <Icon name={'star'} size={25} color={'#62BAF3'} />
      </Button>

      <Button Principal type={'heart'}>
        <Icon name={'heart'} size={30} color={'#73ECDD'} />
      </Button>

      <Button type={'booster'}>
        <MaterialIcon name={'lightning-bolt'} size={30} color={'#AA54EA'} />
      </Button>
    </Container>
  );
};
