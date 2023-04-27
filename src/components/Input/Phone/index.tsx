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
        onChangeFormattedText={text => setPhone(text)}
        onChangeText={setPhone}
        countryPickerProps={{withAlphaFilter: true}}
        containerStyle={style.container}
        textContainerStyle={style.textContainer}
      />
    </>
  );
};

const style = StyleSheet.create({
  container: {
    height: 79,
    borderRadius: 19,
    borderWidth: 3,
    borderColor: '#E5A5DB',
    justifyContent: 'center',
    alignSelf: 'center',
    
  },
  textContainer: {
    borderRadius: 19,
    backgroundColor: '#FFF',
  },
});
