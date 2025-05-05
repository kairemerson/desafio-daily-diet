import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const FeedbackContainer = styled(SafeAreaView)`
    padding: 160px 32px;
    align-items: center;
    gap: 16px;
`

type Props = {
    status: string
}

export const Title = styled.Text<Props>`
    ${({theme, status})=> css`
        color: ${status === "sim" ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"]};
        font-size: ${theme.FONT_SIZE["2XL"]}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        `}
        `

export const Subtitle = styled.Text`
    ${({theme})=> css`
        color: ${ theme.COLORS["gray-1"]};
        font-size: ${theme.FONT_SIZE.LG}px;
        text-align: center;
    `}

    `

export const Destak = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD}

`

export const Image = styled.Image`
    margin: 16px 0;
`
