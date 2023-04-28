import { Container } from "./style"
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  back: any;
}

export const BackButton = ({back}: Props) => {
  return(
    <Container onPress={() => back.goBack()}>
      <Icon name="arrow-back-ios" size={32} color={'#828693'} />
    </Container>
  )
}

