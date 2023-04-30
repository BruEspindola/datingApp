import styled from "styled-components/native";
interface Props {
  gender: boolean
}

export const Container = styled.View`
  flex-direction: column;
  top: 100px;
  align-items: center;
  row-gap: 30px;
`;

export const ButtonGender = styled.TouchableOpacity<Props>`
  width: 70%;
  border-width: 2px;
  border-color: ${Props => Props.gender  ? '#EA4080' : '#C6C5C7'};
  height: 65px;
  justify-content: center;
  border-radius: 50px;
  align-items: center;
`;

export const TextGender = styled.Text<Props>`
  font-size: 25px;
  color: ${Props => Props.gender  ? '#EA4080' : '#C6C5C7'};

`