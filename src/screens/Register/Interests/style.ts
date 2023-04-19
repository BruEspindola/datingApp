import styled from "styled-components/native";
interface Props{
  isSelected: boolean
}

export const ContainerPill = styled.TouchableOpacity<Props>`
padding: 15px;
border: ${Props => Props.isSelected ? '1px solid #DD88CF' : '1px solid #c3c3c3'};
width: auto;
border-radius: 30px;
margin-bottom: 18px;
background: ${Props => Props.isSelected ? '#DD88CF' : 'transparent'}
`
export const TitlePill = styled.Text<Props>`
  font-size: 16px;
  color:  ${Props => Props.isSelected ? '#FFF' : '#000'}
`;

export const Container = styled.View`
  justify-content: center;
  top: 50px; 
  flex-direction: row;
  width: 90%;
  align-self: center;
  flex-wrap: wrap;
  column-gap: 20px
`