import {TouchableOpacity} from 'react-native';
import {
  ContainerButton,
  ContainerImage,
  ContainerText,
  Img,
  Title,
} from './style';
import {ButtonWithIcon} from '../../components/Button/PrimaryButton';
import {SafeView} from '../../GlobalStyle';
import { SignUpButton } from '../../components/Button/SignUpButton';

export const Second = ({navigation}: any) => {
  return (
    <>
      <SafeView>
        <ContainerImage>
          <Img
            Second
            source={require('../../../assets/images/onBoarding/OnBoarding2.png')}
          />
        </ContainerImage>
        <ContainerText>
          <Title>Let's meeting new people around you</Title>
        </ContainerText>

        <ContainerButton>
          <ButtonWithIcon
            OnPress={() => navigation.navigate('Login')}
            Primary
            iconName="phone"
            Title="Login with Phone"
            iconColor="#4B164C"
          />
          <ButtonWithIcon
            Title="Login with Google"
            iconName="google"
            iconColor="#4B164C"
          />
          <SignUpButton/>
        </ContainerButton>
      </SafeView>
    </>
  );
};
