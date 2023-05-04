import styled from 'styled-components/native';

interface Props {
  Principal?: boolean;
  type: string;
}
export const Container = styled.View`
  flex-direction: row;
  align-self: center;
  top: 20px;
  column-gap: 20px;
  align-items: center;
`;

export const Button = styled.TouchableOpacity<Props>`
  width: ${Props => (Props.Principal ? '70px' : '50px')};
  height: ${Props => (Props.Principal ? '70px' : '50px')};
  border: 3px solid
    ${Props =>
      Props.type === 'restore'
        ? '#F3D677'
        : Props.type === 'close'
        ? '#F1606A'
        : Props.type === 'star'
        ? '#62BAF3'
        : Props.type === 'heart'
        ? '#73ECDD'
        : Props.type === 'booster'
        ? '#AA54EA'
        : '#FFF'};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
