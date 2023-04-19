import styled from 'styled-components/native';

interface Props {
  Primary?: boolean;
  hasIcon?: boolean;
}

export const ComponentButton = styled.TouchableOpacity<Props>`
  flex-direction: row;
  justify-content: ${Props => (Props.hasIcon ? 'flex-start' : 'center')};
  align-items: center;
  width: 80%;
  height: 59px;
  border-radius: 32px;
  background-color: ${Props => (Props.Primary ? '#4B164C' : '#FAEAF6')};
  padding: ${Props => (Props.hasIcon ? '10px' : '0')};
  gap: ${Props => (Props.hasIcon ? '50px' : '0')}
`;

export const TitleButton = styled.Text<Props>`
  font-size: 18px;
  font-weight: bold;
  color: ${Props => (Props.Primary ? '#FFF' : '#4B164C')};
`;

export const IconContainer = styled.View`
  background: #FFF;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center
`