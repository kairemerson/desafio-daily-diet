import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.toutes";

export function Routes () {
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}