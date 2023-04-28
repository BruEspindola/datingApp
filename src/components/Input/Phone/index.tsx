import {StyleSheet} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {atomPhone} from '@context';
import {useAtom} from 'jotai';

export const InputPhone = () => {
  const [phone, setPhone] = useAtom(atomPhone);

  return (
    <>
      <PhoneInput
        defaultCode="BR"
        defaultValue={phone}
        value={phone}
        layout="second"
        onChangeFormattedText={text => setPhone(text)}
        onChangeText={setPhone}
        countryPickerProps={{withAlphaFilter: true}}
        containerStyle={style.container}
        textContainerStyle={style.textContainer}
        textInputStyle={style.text}
        codeTextStyle={style.text}
        countryPickerButtonStyle={style.containerCode}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  textContainer: {
    backgroundColor: 'transparent',
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  text: {
    padding: 0,
    fontSize: 20,
    fontFamily: 'Inter-Regular'
  },
  containerCode: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginRight: 15,
    width: 80,
  },
});
