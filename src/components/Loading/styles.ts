import styled from "styled-components/native";


export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({theme})=> theme.COLORS["gray-7"]};
`

export const LodadingIndicator = styled.ActivityIndicator.attrs(({theme})=> ({
    color: theme.COLORS["green-dark"],
    
}))`
    
`