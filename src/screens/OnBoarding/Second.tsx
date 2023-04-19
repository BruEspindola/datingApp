import {TouchableOpacity} from 'react-native';
import {
  ContainerButton,
  ContainerImage,
  ContainerSignUp,
  ContainerText,
  Img,
  SignUpText,
  Title,
} from './style';
import {ButtonWithIcon} from '../../components/Button/PrimaryButton';
import {SafeView} from '../../GlobalStyle';

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
            OnPress={() => navigation.navigate('Name')}
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

          <ContainerSignUp>
            <SignUpText>Don't have an account? </SignUpText>
            <TouchableOpacity>
              <SignUpText Link>Sign Up</SignUpText>
            </TouchableOpacity>
          </ContainerSignUp>
        </ContainerButton>
      </SafeView>
    </>
  );
};
