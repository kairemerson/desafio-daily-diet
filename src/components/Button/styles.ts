import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary"

type Props = {
    type: ButtonTypeStyleProps
}

export const ButtonContainer = styled(TouchableOpacity)<Props>`
        flex: 1;
        min-height: 50px;
        max-height: 50px;
        padding: 0 36px;
        background-color: ${({theme, type})=> type === "primary" ? theme.COLORS["gray-2"] : theme.COLORS.white};
        border-color: ${({theme})=> theme.COLORS["gray-2"]};
        border-width: 1px;
        border-radius: 6px;
        justify-content: center;
        align-items: center;
    `

export const ButtonTitle = styled.Text<Props>`
    ${({theme, type}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${type === "primary" ? theme.COLORS.white : theme.COLORS["gray-1"]};
    
    `}

`