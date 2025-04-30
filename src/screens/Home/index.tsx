import { Text} from "react-native";
import { HomeContainer } from "./styles";
import { Header } from "@components/Header";
import { Percent } from "@components/Percent";
import { Meals } from "@components/Meals";


export function Home() {
    return (
        <HomeContainer>
            <Header/>
            <Percent/>
            <Meals/>
        </HomeContainer>
    )
}