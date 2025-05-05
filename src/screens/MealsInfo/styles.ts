import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type Props = {
    status: string
}


export const MealsInfoContainer = styled(SafeAreaView)<Props>`
    ${({theme, status})=> css`
        background: ${status === "sim" ? theme.COLORS["green-light"]: theme.COLORS["red-light"]};
        flex: 1;
    `}
`

export const MealsInfoHeader = styled.View<Props>`
    ${({theme, status})=> css`
        background: ${status === "sim" ? theme.COLORS["green-light"]: theme.COLORS["red-light"]};
        padding: 24px;
        flex-direction: row;
        align-items: center;
    `}
    
`

export const IconContainer = styled.TouchableOpacity`

`

export const Icon = styled(ArrowLeft).attrs(({theme})=> ({
    size: 24,
    color: theme.COLORS["gray-3"],
}))`
    
`
export const TitleMealsInfo = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["XL"]}px;
    color: ${({theme})=> theme.COLORS["gray-1"]};
    font-weight: bold;
    text-align: center;
    padding-right: 48px;
`

export const MealsInfoMain = styled.View`
    ${({theme})=> css`
        background: ${theme.COLORS["white"]};
        flex: 1;
        padding: 24px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        gap: 6px;
    `}
`

export const Title = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL}px;
        color: ${theme.COLORS["gray-1"]};
        font-weight: bold;
        margin-top: 16px;
    `}
`

export const Subtitle = styled.Text`
     ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS["gray-2"]};
        margin-top: 10px;
    `}
`

export const TitleDataHour = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS["gray-1"]};
        font-weight: bold;
        margin-top: 24px;
    `}
`

export const SubtitleDataHour = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS["gray-2"]};
    `}
`

export const Status = styled.View`
    ${({theme})=> css`
        width: 144px;
        padding: 8px 16px;
        background: ${theme.COLORS["gray-6"]};
        border-radius: 20px;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        margin-top: 24px;
        margin-bottom: auto;
    `}
`


export const Bullet  = styled.View<Props>`
    ${({theme, status})=> css`
        width: 8px;
        height: 8px;
        background: ${status === "sim" ? theme.COLORS["green-dark"]: theme.COLORS["red-dark"]};
        border-radius: 100%;
        
    `}
`

export const TextStatus  = styled.Text`
    ${({theme})=> css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS["gray-1"]};
            
    `}
`

