import { TouchableOpacity } from "react-native";
import { ContainerSignUp, SignUpText } from "./style";

export const SignUpButton = () => {
  return (
    <ContainerSignUp>
      <SignUpText>Don't have an account? </SignUpText>
      <TouchableOpacity>
        <SignUpText Link>Sign Up</SignUpText>
      </TouchableOpacity>
    </ContainerSignUp>
  );
};
