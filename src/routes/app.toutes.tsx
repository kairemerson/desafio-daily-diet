import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { MealsInfo } from "@screens/MealsInfo";
import { NewMeals } from "@screens/NewMeals";
import { Statistic } from "@screens/Statistic";


const {Navigator, Screen} = createNativeStackNavigator()

export function AppRoutes () {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen 
                name="home"
                component={Home}
            />
            <Screen 
                name="statistics"
                component={Statistic}
            />
            <Screen 
                name="newMeals"
                component={NewMeals}
            />
            <Screen 
                name="feedback"
                component={Feedback}
            />
            <Screen 
                name="mealsinfo"
                component={MealsInfo}
            />
        </Navigator>
    )
}
