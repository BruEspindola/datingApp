import { ContainerButton, Gradient, Title } from "./style";

interface Props {
  Text: string,
  onPress: () => void,
  disabled?: boolean
}
export const GradientButton = ({Text, onPress, disabled}: Props) => {
  return (
    <ContainerButton disabled={disabled} onPress={onPress}>
      <Gradient>
        <Title>{Text}</Title>
      </Gradient>
    </ContainerButton>
  )
}