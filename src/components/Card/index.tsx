import {Image, StyleSheet, Animated} from 'react-native';
import {
  Container,
  DescriptionContainer,
  Gradient,
  ImageCharacter,
  Live,
  LiveContainer,
  Name,
} from './style';
import {Character} from '@services';

interface Props {
  Character: Character;
}

export const Card = ({Character}: Props) => {
  return (
    <Container as={Animated.View} style={style.card}>
      <ImageCharacter source={{uri: Character?.imageUrl}} resizeMode="cover" />
      <Gradient />
      <DescriptionContainer>
        <Name>{Character?.name}</Name>
      </DescriptionContainer>
    </Container>
  );
};

const style = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
});
