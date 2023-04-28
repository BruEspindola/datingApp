import OtpInputs from 'react-native-otp-inputs';
import {SafeView} from '@style';

import {useAtom} from 'jotai';
import {atomConfirm, atomPhone} from '@context';
import {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {ContainerButton, Loading} from './style';
import {GradientButton} from '@components/Button/GradientButton';

export const OTP = ({nav}: any) => {
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
        setLoading(false);
        nav()
      } catch (error) {
        setLoading(false);
        console.log('Invalid code.', error);
      } finally {
        setIsConfirming(false);
      }
    }

    if (isConfirming) {
      confirmCode();
    }
  }, [confirm, code, isConfirming]);

  return (
    <>
      <OtpInputs
        inputContainerStyles={{margin: 5}}
        style={styles.OPT}
        inputStyles={styles.Input}
        autofillFromClipboard={false}
        handleChange={text => setCode(text)}
        numberOfInputs={6}
      />
      <ContainerButton>
        <GradientButton disabled={loading} onPress={() => setIsConfirming(true)} Text="CONTINUE" />

        {loading && <Loading size="large" color="#E39ED8" />}
      </ContainerButton>
    </>
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
    borderBottomWidth: 2,
    borderColor: '#000',
    textAlign: 'center',
    backgroundColor: '#FFF',
    fontSize: 22,
  },
});
