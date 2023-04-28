import {Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button} from '@components/Button/PrimaryButton';
import {
  Container,
  ContainerButton,
  ContainerTextRegister,
  GradientView,
  Subtitle,
} from './style';
import { SignUpButton } from '@components/Button/SignUpButton';

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
    <GradientView>
      <Container>
        <Image source={require('@images/Logo.png')} />
        <Subtitle>
          By tapping Create Account or Sign In, you agree to our Terms. Learn
          how we process your data in our Privacy Policy and Cookies Policy.
        </Subtitle>
        <ContainerButton>
          <Button Title="SIGN IN WITH APPLE" />
          <Button Title="SIGN IN WITH FACEBOOK" />
          <Button
            Title="SIGN IN WITH PHONE NUMBER"
            OnPress={() => navigation.navigate('Second')}
          />
          <ContainerTextRegister>
           <SignUpButton/>
          </ContainerTextRegister>
        </ContainerButton>
      </Container>
    </GradientView>
  );
};
