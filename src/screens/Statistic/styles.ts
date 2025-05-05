import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    percent: number
}

export const StatisticContainer = styled(SafeAreaView)<Props>`
    ${({theme, percent})=> css`
        background: ${percent > 90 ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
        flex: 1;
    `}

`

export const StatistiHeader = styled.View<Props>`
    ${({theme, percent})=> css`
        background: ${percent > 90 ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};
        padding: 24px;
    `}
    
`

export const IconContainer = styled.TouchableOpacity`

`

export const Icon = styled(ArrowLeft).attrs<Props>(({theme, percent})=> ({
    size: 24,
    color: percent > 90 ? theme.COLORS["green-dark"] : theme.COLORS["red-dark"],
}))`
    margin-right: auto;
    `
export const TitleStatistic = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["3XL"]}px;
    color: ${({theme})=> theme.COLORS["gray-1"]};
    font-weight: bold;
    text-align: center;
`

export const SubtitleStatistic = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    color: ${({theme})=> theme.COLORS["gray-2"]};
    text-align: center;
`

export const StatistiMain = styled.View`
    ${({theme})=> css`
        background: ${theme.COLORS["gray-7"]};
        flex: 1;
        padding: 24px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    `}
`

export const Title = styled.Text`
    ${({theme})=> css`
        color: ${theme.COLORS["gray-1"]};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        margin-bottom: 16px;
        text-align: center;
    `}
`

export const CardsContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
`