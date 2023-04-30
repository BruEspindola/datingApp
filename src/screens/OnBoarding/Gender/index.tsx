import {BackButton} from '@components/Button/BackButton';
import {GradientButton} from '@components/Button/GradientButton';
import {Title} from '@components/Title';
import {SafeView} from '@style';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonGender, Container, TextGender} from './style';

export const Gender = ({navigation}: any) => {
  const [woman, setWoman] = useState(false);
  const [man, setMan] = useState(false);

  const choose = (gender: string) => {
    if (gender === 'woman') {
      setMan(false);
      setWoman(true);
    } else {
      setWoman(false);
      setMan(true);
    }
  };
  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="I am a" />
      <Container>
        <ButtonGender onPress={() => choose('woman')} gender={woman}>
          <TextGender gender={woman}>WOMAN</TextGender>
        </ButtonGender>
        <ButtonGender onPress={() => choose('man')} gender={man}>
          <TextGender gender={man}>MAN</TextGender>
        </ButtonGender>

        <GradientButton
          onPress={() => navigation.push('Interest')}
          Text="CONTINUE"
        />
      </Container>
    </SafeView>
  );
};
