import { TouchableOpacityProps } from "react-native";
import { Hour, HourContainer, MealsCardContainer, Status, Title } from "./styles";
import { MealDTO } from "src/dtos/MealDTO";


type Props = TouchableOpacityProps & {
    meals: MealDTO
}

export function MealsCard({meals, ...rest}: Props) {
    return(
        <MealsCardContainer {...rest}>
            <HourContainer>
                <Hour>{meals.hour}</Hour>

            </HourContainer>
            <Title>{meals.name}</Title>
            <Status status={meals.status}/>
        </MealsCardContainer>
    )
}