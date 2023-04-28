import styled from 'styled-components/native';

interface Props {
  Link?: boolean
}

export const ContainerSignUp = styled.View`
  flex-direction: row;
`;

export const SignUpText = styled.Text<Props>`
  font-size: 16px;
  color: #FFF;
  font-weight: ${Props => (Props.Link ? 'bold' : 'regular')};
  font-family: 'Inter-Medium';
`;