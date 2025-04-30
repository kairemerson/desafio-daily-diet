import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const HomeContainer = styled(SafeAreaView)`
    flex: 1;
    padding: 24px;
    background: ${({theme})=> theme.COLORS["gray-7"]};
    font-family: ${({theme})=> theme.FONT_FAMILY.BOLD};
`
