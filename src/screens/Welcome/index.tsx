import {BackButton} from '@components/Button/BackButton';
import {GradientButton} from '@components/Button/GradientButton';
import {SafeView} from '@style';
import Icon from 'react-native-vector-icons/Octicons';
import {
  ContainerRules,
  ImageContainer,
  Subtitle,
  WelcomeTitle,
  TitleRules,
  TextRules,
} from './style';

export const Welcome = ({navigation}: any) => {
  return (
    <SafeView>
      <BackButton back={navigation} />
      <ImageContainer source={require('@images/Tinder.png')} />
      <WelcomeTitle>Welcome to Tinder.</WelcomeTitle>
      <Subtitle>Please follow these House Rules.</Subtitle>

      <ContainerRules>
        <Icon name="check" size={32} color={'#EC5C54'} />
        <TitleRules>Be yourself.</TitleRules>
      </ContainerRules>
      <TextRules>
        Make sure your photos, age, and bio are true to who you are.
      </TextRules>

      <ContainerRules>
        <Icon name="check" size={32} color={'#EC5C54'} />
        <TitleRules>Stay safe.</TitleRules>
      </ContainerRules>
      <TextRules>
        Don’t be too quick to give out personal information. Date Safely
      </TextRules>

      <ContainerRules>
        <Icon name="check" size={32} color={'#EC5C54'} />
        <TitleRules>Play it cool.</TitleRules>
      </ContainerRules>
      <TextRules>
        Respect others and treat them as you would like to be treated.
      </TextRules>

      <ContainerRules>
        <Icon name="check" size={32} color={'#EC5C54'} />
        <TitleRules>Be proactive.</TitleRules>
      </ContainerRules>
      <TextRules>Always report bad behavior.</TextRules>

      <GradientButton Text="I AGREE" onPress={() => console.log('ook')} />
    </SafeView>
  );
};
