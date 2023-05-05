import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from '@components/Button/PrimaryButton';
import {
  Container,
  ContainerButton,
  ContainerTextRegister,
  GradientView,
  Subtitle,
} from './style';
import { SignUpButton } from '@components/Button/SignUpButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {CLI_ID_GOOGLE} from '@helper';
import auth from '@react-native-firebase/auth';

type RootStackParamList = {
  Second: undefined;
  Home: undefined
};
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Second',
  'Home'
>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

export const First = ({navigation}: Props) => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: CLI_ID_GOOGLE,
    });
  }, []);

  const handleLoginGoogle = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };

  return (
    <GradientView>
      <Container>
        <Image source={require('@images/Logo.png')} />
        <Subtitle>
          By tapping Create Account or Sign In, you agree to our Terms. Learn
          how we process your data in our Privacy Policy and Cookies Policy.
        </Subtitle>
        <ContainerButton>
          <Button Title="SIGN IN WITH GOOGLE" OnPress={() => handleLoginGoogle()} />
          <Button
            Title="SIGN IN WITH PHONE NUMBER"
            OnPress={() => navigation.navigate('Second')}
          />
          <ContainerTextRegister>
           <SignUpButton go={navigation}/>
          </ContainerTextRegister>
        </ContainerButton>
      </Container>
    </GradientView>
  );
};
