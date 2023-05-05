import { TouchableOpacity } from "react-native";
import { ContainerSignUp, SignUpText } from "./style";
interface Props {
  go: any;
}
export const SignUpButton = ({go}: Props) => {
  return (
    <ContainerSignUp>
      <SignUpText>Don't have an account? </SignUpText>
      <TouchableOpacity>
        <SignUpText onPress={() => go.navigate('Home')} Link>Sign Up</SignUpText>
      </TouchableOpacity>
    </ContainerSignUp>
  );
};
