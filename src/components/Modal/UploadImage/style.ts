import styled from "styled-components/native";

export const CloseContainer = styled.View`
  z-index: 9;
  align-items: flex-end;
  top: 25%;
  margin-right: 10%;
`;

export const CloseButton = styled.TouchableOpacity`
  background: #DD88CF;
  padding: 5px;
  border-radius: 50px;
`;

export const ModalContainer = styled.View`
  top: 22%;
  align-items: center;
  flex: 1;
`;

export const Modal = styled.View`
  background: #FFF;
  width: 80%;
  height: 380px;
  align-items: center;
  border-radius: 20px;
  padding: 80px;
`;

export const IconContainer = styled.View`
  background: #DD88CF;
  width: 90px;
  height: 90px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.TouchableOpacity`
  width: 100px;
  height: 55px;
  background: #4b164c;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const BtnTitle = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const BtnContainer = styled.View`
  flex-direction: row;
  align-self: center;
  column-gap: 30px;
  margin-top: 50px;
`

