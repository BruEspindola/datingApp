import {TitleButton, ComponentButton} from './style';

interface Props {
  Title: string;
  OnPress?: () => void;
}

export const Button = ({Title, OnPress}: Props) => {
  return (
    <ComponentButton onPress={OnPress}>
      <TitleButton >{Title}</TitleButton>
    </ComponentButton>
  );
};