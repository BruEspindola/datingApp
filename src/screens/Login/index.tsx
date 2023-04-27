import {Text, View} from 'react-native';
import {useAtom} from 'jotai';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {SafeView} from '@style';
import {Title} from '@components/Title';
import {InputPhone} from '@components/Input/Phone';
import {Button} from '@components/Button/PrimaryButton';
import {BackButton} from '@components/Button/BackButton';
import {SignUpButton} from '@components/Button/SignUpButton';
import {atomConfirm, atomPhone} from '@context';
import {useEffect, useState} from 'react';
import {ContainerButton, Error, Subtitle} from './style';

export const Login = ({navigation}: any) => {
  const [phone] = useAtom(atomPhone);
  const [confirm, setConfirm] = useAtom(atomConfirm); // If null, no SMS has been sent
  const [error, setError] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    if (user) {
      console.log(user);
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  async function signInWithPhoneNumber(phoneNumber: string) {
    if (phoneNumber) {
      setError(false);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      navigation.push('OTP');
    } else {
      setError(true);
    }
  }

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="Login" />
      <Subtitle>Enter your phone number to login</Subtitle>

      <View>
        <InputPhone />
        {error && <Error>Missing phone</Error>}
        <ContainerButton>
          <Button
            Primary Title="Login"
            OnPress={() => signInWithPhoneNumber(phone)}
          />
          <SignUpButton />
        </ContainerButton>
      </View>
    </SafeView>
  );
};
