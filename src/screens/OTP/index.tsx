import OtpInputs from 'react-native-otp-inputs';
import {SafeView} from '@style';

import {useAtom} from 'jotai';
import {atomConfirm, atomPhone} from '@context';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {Title} from '@components/Title';
import {BackButton} from '@components/Button/BackButton';
import {Button} from '@components/Button/PrimaryButton';
import {ContainerButton, Loading, Subtitle} from './style';

export const OTP = ({navigation}: any) => {
  const [confirm] = useAtom(atomConfirm);
  const [code, setCode] = useState('');
  const [phone] = useAtom(atomPhone);
  const [loading, setLoading] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    async function confirmCode() {
      setIsConfirming(true);
      setLoading(true);
      try {
        await confirm?.confirm(code);
        console.log('confirm');
        navigation.push('Home');
      } catch (error) {
        setLoading(false);
        console.log('Invalid code.');
      } finally {
        setIsConfirming(false);
      }
    }

    if (isConfirming) {
      confirmCode();
    }
  }, [confirm, code, isConfirming]);

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="Enter 4-digits code" />
      <Subtitle>
        Enter OTP code we sent to number final {phone.slice(-4)}{' '}
      </Subtitle>
      <OtpInputs
        inputContainerStyles={{margin: 5}}
        style={styles.OPT}
        inputStyles={styles.Input}
        autofillFromClipboard={false}
        handleChange={text => setCode(text)}
        numberOfInputs={6}
      />
      <ContainerButton>
        <Button
          disabled={loading}
          Primary
          Title="Verify Code"
          OnPress={() => setIsConfirming(true)}
        />
        {loading && <Loading size="large" color="#E39ED8" />}
      </ContainerButton>
    </SafeView>
  );
};

const styles = StyleSheet.create({
  OPT: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 120,
  },
  Input: {
    width: 45,
    height: 45,
    borderWidth: 2,
    borderColor: '#E39ED8',
    textAlign: 'center',
    backgroundColor: '#FFF',
    fontSize: 22,
    borderRadius: 8,
  },
});
