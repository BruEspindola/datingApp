import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

interface Props {
  link?: boolean;
}

export const GradientView = styled(LinearGradient).attrs({
  start: {x: 0, y: 1},
  end: {x: 1.9, y: 0},
  colors: ['#ea4080', '#ef5074', '#f1606a', '#f17063', '#ee805f'],
})`
  flex: 1;
`;

export const Container = styled.View`
  align-items: center;
  top: 40%;
`;

export const Subtitle = styled.Text`
  margin-top: 60px;
  color: #fff;
  font-size: 16px;
  text-align: center;
  width: 70%;
  line-height: 19px;
  font-family: 'Inter-Medium';
`;

export const ContainerButton = styled.View`
  width: 100%;
  row-gap: 20px;
  margin-top: 40px;
`;
export const ContainerTextRegister = styled.View`
  flex-direction: row;
  align-self: center;
`;

