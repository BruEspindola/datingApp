import styled from 'styled-components/native';

interface Props {
  Primary?: boolean;
  Link?: boolean;
  Second?: boolean;
}

export const ContainerImage = styled.View<Props>`
  align-items: center;
  width: 100%;
  height: 400px;
  margin: 25px 0 30px 0;
`;

export const Img = styled.Image<Props>`
  width: ${Props => (Props.Second ? '90%' : '100%')};
  height: ${Props => (Props.Second ? '90%' : '100%')};
`;

export const ContainerText = styled.View<Props>`
  width: ${Props => (Props.Primary ? '80%' : '70%')};
  align-self: center;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  text-align: center;
`;

export const ContainerButton = styled.View`
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

export const ContainerSignUp = styled.View`
  flex-direction: row;
`;

export const SignUpText = styled.Text<Props>`
  font-size: 14px;
  color: ${Props => (Props.Link ? '#E39ED8' : '#363636')};
  font-weight: ${Props => (Props.Link ? 'bold' : 'regular')};
`;
