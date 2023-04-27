import {
  ContainerButton,
  ContainerImage,
  ContainerText,
  Img,
  Title,
} from './style';
import {ButtonWithIcon} from '@components/Button/PrimaryButton';
import {SafeView} from '@style';
import {SignUpButton} from '@components/Button/SignUpButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useEffect, useState} from 'react';
import {CLI_ID_GOOGLE} from '@helper';
import auth from '@react-native-firebase/auth';


export const Second = ({navigation}: any) => {
  
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
    <>
      <SafeView>
        <ContainerImage>
          <Img
            Second
            source={require('@images/onBoarding/OnBoarding2.png')}
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
            OnPress={() => handleLoginGoogle()}
            Title="Login with Google"
            iconName="google"
            iconColor="#4B164C"
          />
          <SignUpButton />
        </ContainerButton>
      </SafeView>
    </>
  );
};
