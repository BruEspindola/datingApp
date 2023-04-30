import {BackButton} from '@components/Button/BackButton';
import {OTP} from '@components/OTP';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Third = ({navigation}: any) => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFF', flex: 1}}>
      <BackButton back={navigation} />
      <Text style={{fontSize: 38, color: '#010001', top: 20, left: '15%'}}>
        My code is
      </Text>
      <OTP nav={() => navigation.push('Fourth')} />
    </SafeAreaView>
  );
};
