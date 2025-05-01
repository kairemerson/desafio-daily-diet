import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonTypeStyleProps
}

export function Button({title, type="primary", ...rest}: Props) {
    return(
        <ButtonContainer type={type} {...rest}>
            
            <ButtonTitle type={type}>
                {title}
            </ButtonTitle>
        </ButtonContainer>
    )
}