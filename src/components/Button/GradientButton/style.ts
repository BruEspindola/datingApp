import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface Props {
  disabled?: boolean
}

export const ContainerButton = styled.TouchableOpacity<Props>`
  width: 100%;
  top: 100px;
  opacity: ${Props => Props.disabled ? '0.7' : '1'};
`;

export const Gradient = styled(LinearGradient).attrs({
  useAngle: true,
  angle: 120,
  colors: ['#ea4080', '#ef5074', '#f1606a', '#f17063', '#ee805f'],
})`
  width: 70%;
  align-self: center;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 18px;
  letter-spacing: 0.5px;
  font-family: 'Inter-Bold';
`;
