import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";

type Props = TextInputProps & {
    height?: number
}

export function Input({...rest}: Props) {
    return (
        <InputContainer {...rest}/>
    )
}