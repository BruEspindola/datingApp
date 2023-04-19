import {useState} from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Title} from '../../../components/Title/Title';
import {Container, Subtitle, SwitchGender, Symbol} from './style';
import {NextButton} from '../../../components/Button/NextButton';
import {BackButton} from '../../../components/Button/BackButton';
import {Error} from './style';
import {SafeView} from '../../../GlobalStyle';

export const Gender = ({navigation}: any) => {
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [error, setError] = useState(false);

  const setGender = (gender: string) => {
    if (gender === 'Man') {
      setFemale(false);
      setMale(true);
    } else if (gender === 'Woman') {
      setMale(false);
      setFemale(true);
    }
  };

  const handleNext = () => {
    if (!male && !female) {
      setError(true);
      return;
    } else {
      navigation.navigate('Interest');
    }
  };

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="What's your gender" />
      <Container>
        <SwitchGender
          onPress={() => setGender('Man')}
          style={{
            borderColor: male ? '#4B164C' : '#FFF',
          }}>
          <Symbol isMan>
            <Icon name="symbol-male" size={26} color={'#FFF'} />
          </Symbol>
          <Subtitle>Man</Subtitle>
        </SwitchGender>
        <SwitchGender
          onPress={() => setGender('Woman')}
          style={{
            borderColor: female ? '#DD88CF' : '#FFF',
          }}>
          <Symbol>
            <Icon name="symbol-female" size={26} color={'#FFF'} />
          </Symbol>
          <Subtitle>Woman</Subtitle>
        </SwitchGender>
      </Container>
      {error && <Error>Gender is required</Error>}
      <NextButton onPress={handleNext} />
    </SafeView>
  );
};


