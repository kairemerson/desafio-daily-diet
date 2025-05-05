import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTitle, ButtonTypeStyleProps} from "./styles";
import { ReactNode } from "react";


type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonTypeStyleProps
    children?: ReactNode
}

export function Button({title, type="primary", children, ...rest}: Props) {
    return(
        <ButtonContainer type={type} {...rest}>
            {children}
            <ButtonTitle type={type}>
                {title}
            </ButtonTitle>
        </ButtonContainer>
    )
}