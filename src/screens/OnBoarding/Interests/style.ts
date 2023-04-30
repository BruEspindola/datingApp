import styled from "styled-components/native";
interface Props{
  isSelected: boolean
}

export const ContainerPill = styled.TouchableOpacity<Props>`
padding: 10px 20px;
border: ${Props => Props.isSelected ? '3px solid #EA5B6E' : '3px solid #c3c3c3'};
width: auto;
border-radius: 30px;
margin-bottom: 18px;
align-items: baseline;
`
export const TitlePill = styled.Text<Props>`
  font-size: 19px;
  color:  ${Props => Props.isSelected ? '#EA5B6E' : '#C6C5C7'};
  font-family: 'Poppins-Bold';
  font-weight: bold;
`;

export const Container = styled.View`
  justify-content: center;
  top: 50px; 
  flex-direction: row;
  width: 90%;
  align-self: flex-start;
  flex-wrap: wrap;
  column-gap: 20px
`