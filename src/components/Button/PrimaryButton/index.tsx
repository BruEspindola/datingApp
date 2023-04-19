import Icon from 'react-native-vector-icons/FontAwesome';
import {TitleButton, ComponentButton, IconContainer} from './style';

interface Props {
  Primary?: boolean;
  Title: string;
  OnPress?: () => void;
}

interface PropsIcon {
  Primary?: boolean;
  Title: string;
  OnPress?: () => void;
  iconName: string;
  iconColor?: string;
}

export const Button = ({Primary, Title, OnPress}: Props) => {
  return (
    <ComponentButton Primary={Primary} onPress={OnPress}>
      <TitleButton Primary={Primary}>{Title}</TitleButton>
    </ComponentButton>
  );
};

export const ButtonWithIcon = ({
  Primary,
  Title,
  OnPress,
  iconName,
  iconColor,
}: PropsIcon) => {
  return (
    <ComponentButton hasIcon Primary={Primary} onPress={OnPress}>
      <IconContainer>
        <Icon name={iconName} size={26} color={iconColor} />
      </IconContainer>
      <TitleButton Primary={Primary}>{Title}</TitleButton>
    </ComponentButton>
  );
};
