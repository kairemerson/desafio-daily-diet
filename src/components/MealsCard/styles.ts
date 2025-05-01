import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export const MealsCardContainer = styled(TouchableOpacity)`
    padding: 14px 8px;
    border: 1px solid ${({theme})=> theme.COLORS["gray-5"]};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin: 6px 0;
`

export const HourContainer =  styled.View`
    border-right-width: 2px;
    border-right-color: ${({theme})=> theme.COLORS["gray-5"]};
    padding-right: 10px;
`

export const Hour = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS["gray-1"]};
        font-weight: bold;
    `};
`

export const Title = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS["gray-2"]};
        flex: 1;
    `};
`

type StatusProps = {
    status: "sim" | "nao"
}

export const Status = styled.View<StatusProps>`
    ${({theme, status})=> css`
        width: 14px;
        height: 14px;
        border-radius: 100%;
        background: ${status === "sim" ? theme.COLORS["green-mid"] : theme.COLORS["red-mid"]};

    `}
`