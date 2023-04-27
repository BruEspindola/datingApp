import {SafeAreaView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  ContainerButton,
  ContainerImage,
  ContainerText,
  Img,
  Subtitle,
  Title,
} from './style';
import {Button} from '@components/Button/PrimaryButton';

type RootStackParamList = {
  Second: undefined;
};
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Second'
>;

interface Props {
  navigation: DetailsScreenNavigationProp;
}

export const First = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <ContainerImage>
        <Img
          source={require('../../../assets/images/onBoarding/onBoarding.png')}
        />
      </ContainerImage>
      <ContainerText Primary>
        <Title>Make friends with the people like you</Title>
        <Subtitle>
          Interact with people with the same interest like you
        </Subtitle>
      </ContainerText>

      <ContainerButton>
        <Button
          Primary
          Title="Continue"
          OnPress={() => navigation.navigate('Second')}
        />
        <Button Title="Sign In" />
      </ContainerButton>
    </SafeAreaView>
  );
};