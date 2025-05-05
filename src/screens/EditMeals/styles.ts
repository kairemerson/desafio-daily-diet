import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export const NewMealContainer = styled(SafeAreaView)`
    ${({theme})=> css`
        background: ${theme.COLORS["gray-5"]};
        flex: 1;
    `}
    
`

export const NewMealsHeader = styled.View`
    ${({theme})=> css`
        background: ${theme.COLORS["gray-5"]};
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
export const TitleNewMeals = styled.Text`
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR};
    width: 100%;
    font-size: ${({theme})=> theme.FONT_SIZE["XL"]}px;
    color: ${({theme})=> theme.COLORS["gray-1"]};
    font-weight: bold;
    text-align: center;
    padding-right: 48px;
`

export const NewMealsMain = styled.View`
    ${({theme})=> css`
        background: ${theme.COLORS["gray-7"]};
        flex: 1;
        padding: 24px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        gap: 6px;
    `}
`

export const Label = styled.Text`
    ${({theme})=> css`
        margin-top: 18px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`

export const DateHourContainer = styled.View`
    flex-direction: row;
    gap: 16px;
`
export const DateHourView = styled.View`
    flex: 1;
    gap: 6px;
`

export const ChoiceContainer = styled.View`
    gap: 6px;
    flex: 1;
`
export const ChoiceView = styled.View`
    flex-direction: row;
    gap: 16px;
`

type IntoDiet ={
    status: string
}

export const ButtonChoice = styled.TouchableOpacity<IntoDiet>`
    ${({theme, status})=> css`
        padding: 16px;
        flex: 1;
        background: ${status === "sim" ? theme.COLORS["green-light"] : theme.COLORS["gray-6"]};
        border-color: ${status === "sim" ? theme.COLORS["green-dark"] : theme.COLORS["gray-6"]};
        border-width: 1px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border-radius: 6px;
    `}

`
export const ButtonChoiceNot = styled.TouchableOpacity<IntoDiet>`
    ${({theme, status})=> css`
        padding: 16px;
        flex: 1;
        background: ${ status === "nao" ? theme.COLORS["red-light"] : theme.COLORS["gray-6"]};
        border-color: ${ status === "nao" ? theme.COLORS["red-dark"] : theme.COLORS["gray-6"]};
        border-width: 1px;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 6px;
        border-radius: 6px;
    `}

`
export const TextButton = styled.Text`
`

export const Bullet  = styled.View`
    ${({theme})=> css`
        width: 8px;
        height: 8px;
        background: ${theme.COLORS["green-dark"]};
        border-radius: 100%;
        
    `}
`
export const BulletNot  = styled.View`
    ${({theme})=> css`
        width: 8px;
        height: 8px;
        background: ${theme.COLORS["red-dark"]};
        border-radius: 100%;
        
    `}
`



