import styled from 'styled-components/native';

interface Props {
  Link?: boolean
}

export const ContainerSignUp = styled.View`
  flex-direction: row;
`;

export const SignUpText = styled.Text<Props>`
  font-size: 14px;
  color: ${Props => (Props.Link ? '#E39ED8' : '#363636')};
  font-weight: ${Props => (Props.Link ? 'bold' : 'regular')};
`;