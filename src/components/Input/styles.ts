import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    height?: number
}

export const InputContainer = styled(TextInput)<Props>`
    ${({theme, height=56})=> css`
        /* flex: 1; */
       
        width: 100%;
        min-height: 56px;
        max-height: ${height}px;
        border-width: 1px;
        border-color: ${theme.COLORS["gray-5"]};
        border-radius: 6px;
        padding: 14px;
    
    `}
`