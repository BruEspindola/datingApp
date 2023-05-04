import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  top: 100px;
  align-self: center;
  height: 70%;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
`;

export const ImageCharacter = styled.Image`
  border-radius: 20px;
  flex: 1;
  width: 100%;
`;

export const Gradient = styled(LinearGradient).attrs({
  colors: ['transparent', 'rgba(0, 0, 0, 0.7)',  'rgba(0, 0, 0, 0.9)'],
})`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 350px;
  border-radius: 20px;
`;

export const DescriptionContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  position: absolute;
  left: 20px;
  bottom: 100px;
`;

export const Name = styled.Text`
  font-size: 38px;
  color: #FFF;
  font-family: 'Inter-SemiBold';
  width: 90%;
`;

export const LiveContainer = styled.View`
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`;

export const Live = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #FFF;
  font-family: 'Inter-SemiBold';
`
