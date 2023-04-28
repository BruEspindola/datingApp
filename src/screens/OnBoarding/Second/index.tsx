import {BackButton} from '@components/Button/BackButton';
import {InputPhone} from '@components/Input/Phone';
import {useAtom} from 'jotai';
import {atomConfirm, atomPhone} from '@context';
import {StackNavigationProp} from '@react-navigation/stack';
import {SafeView} from '@style';
import {Title} from '@components/Title';
import {Container, Subtitle} from './style';
import {GradientButton} from '@components/Button/GradientButton';
import { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

type RootStackParamList = {
  Third: undefined;
};
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Third'
>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

export const Second = ({navigation}: Props) => {
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
      navigation.push('Third');
    } else {
      setError(true);
    }
  }

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="My number is" />
      <Container>
        <InputPhone />
        <Subtitle>
          We will send a text with a verification code. Message and data rates
          may apply. Learn what happens when your number changes.
        </Subtitle>

        <GradientButton
          Text="CONTINUE"
          onPress={() => signInWithPhoneNumber(phone)}
        />
      </Container>
    </SafeView>
  );
};
