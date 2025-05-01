import styled, { css } from "styled-components/native";

export const MealsContainer = styled.View`
    flex: 1;
    margin-top: 32px;
`

export const TitleMeals = styled.Text`
    color: ${({theme})=> theme.COLORS["gray-1"]};
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme})=> theme.FONT_SIZE.LG}px;
    margin-bottom: 8px;
`

export const TitleCard = styled.Text`
     ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-weight: bold;
        margin-top: 24px;
    `}

`