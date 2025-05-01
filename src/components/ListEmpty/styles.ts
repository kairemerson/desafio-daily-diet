import styled, { css } from "styled-components/native";


export const ListEmptyContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const Message = styled.Text`
    ${({theme})=> css`
        text-align: center;
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${theme.COLORS["gray-1"]};
    
    `}
`