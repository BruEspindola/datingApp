import styled from 'styled-components/native';
interface Props {
  isMan?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  gap: 20px;
  margin-top: 50px;
`;

export const SwitchGender = styled.TouchableOpacity`
  height: 150px;
  width: 150px;
  background: #fff;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  border: 2px solid;
`;

export const Symbol = styled.View<Props>`
  height: 70px;
  width: 70px;
  background: ${Props => (Props.isMan ? '#4B164C' : '#DD88CF')};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #000;
  top: 10px;
`;

export const Error = styled.Text`
  text-align: center;
  font-size: 14px;
  color: #ba1f33;
  font-weight: bold;
  margin-top: 20px;
`;
