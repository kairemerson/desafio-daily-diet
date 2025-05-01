import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";


export const PercentContainer = styled.View`
    background: ${({theme})=> theme.COLORS["green-light"]};
    border-radius: 8px;
    padding: 10px 10px 20px;
    margin-top: 10px;
    `
export const IconContainer = styled.TouchableOpacity`

`

export const Icon = styled(ArrowUpRight).attrs(({theme})=> ({
    size: 24,
    color: theme.COLORS["green-dark"],
}))`
    margin-left: auto;
    `
export const TitlePercent = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["3XL"]}px;
    color: ${({theme})=> theme.COLORS["gray-1"]};
    font-weight: bold;
    text-align: center;
`

export const SubtitlePercent = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    color: ${({theme})=> theme.COLORS["gray-2"]};
    text-align: center;
`
