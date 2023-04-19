import {statusCodes} from '@react-native-google-signin/google-signin';
import styled from 'styled-components/native';

export const Container = styled.View`
  top: 70px;
`;

export const Input = styled.TextInput`
  height: 60px;
  width: 80%;
  border: 2px solid #e4a4da;
  border-radius: 15px;
  background: #fff;
  align-self: center;
  margin-top: 30px;
  font-size: 18px;
  padding-left: 20px;
  color: #000;
`;

export const Error = styled.Text`
   margin: 5px 0 0 49px;
   font-size: 14px;
   color: #BA1F33;
   font-weight: bold;
`