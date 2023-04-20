import styled from "styled-components/native";
interface Props {
  Primary?: boolean
}
export const Container = styled.TouchableOpacity<Props>`
  background: #FFF;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: ${Props => Props.Primary ? '216px' : '110px'};
  height:${Props => Props.Primary ? '230px' : '110px'};
`;

export const ContainerText = styled.View<Props>`
  background: #DD88CF;
  width: ${Props => Props.Primary ? '80px' : '70px'};
  height: ${Props => Props.Primary ? '40px' : '30px'};
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<Props>`
  font-size: ${Props => Props.Primary ? '18px' : '16px'};
  color: #FFF;
  font-weight: bold;
`
