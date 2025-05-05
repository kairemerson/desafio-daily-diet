import styled, { css } from "styled-components/native";

type Props = {
    variant: "primary" | "secondary" | "neutral"
    fullwidth?: boolean
}

export const CardContainer = styled.View<Props>`
    ${({theme, fullwidth, variant})=> css`
       width: ${fullwidth ? "100%" : "48%"};
       background: ${variant === "primary" ? theme.COLORS["green-light"] : variant === "secondary" ? theme.COLORS["red-light"] : theme.COLORS["gray-6"]};
       padding: 16px;
       border-radius: 8px;
       align-items: center;
       gap: 8px;
    `}
`

export const Title = styled.Text`
    ${({theme})=> css`
       font-size: ${theme.FONT_SIZE["2XL"]}px;
       color: ${theme.COLORS["gray-1"]};
       font-weight: bold;
    `}
`

export const Subtitle = styled.Text`
     ${({theme})=> css`
       font-size: ${theme.FONT_SIZE.MD}px;
       color: ${theme.COLORS["gray-2"]};
       text-align: center;
    `}
`