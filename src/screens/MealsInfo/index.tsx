import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Bullet, Icon, IconContainer, MealsInfoContainer, MealsInfoHeader, MealsInfoMain, Status, Subtitle, SubtitleDataHour, TextStatus, Title, TitleDataHour, TitleMealsInfo } from "./styles";
import { Button } from "@components/Button";
import { MealDTO } from "src/dtos/MealDTO";
import { mealsGetById } from "@storage/meals/mealsGetById";
import { mealsRemoveById } from "@storage/meals/mealRemoveById";
import { Pencil, PencilLine, Trash } from "phosphor-react-native";

type RotesParams = {
    id: string
}

export function MealsInfo() {

    const [meal, setMeal] = useState<MealDTO>({} as MealDTO)

    const navigation = useNavigation()

    const routes = useRoute()

    const {id} = routes.params as RotesParams


    async function fetchMealById(){
        const mealById = await mealsGetById(id)

        if(mealById){
            setMeal(mealById)
        }

    }

    async function removeMeal() {
        try {
            await mealsRemoveById(id)
            navigation.navigate("home")
        } catch (error) {
            console.log(error)
            Alert.alert("Remover refeição", "Não foi possível remover refeição.")
        }
    }

    async function handleMealRemove() {
        Alert.alert(
            "Remover",
            "Deseja remover essa refeição?",
            [
                {text: "Não", style: "cancel"},
                {text: "Sim", onPress: ()=> removeMeal()}
            ]
        )
    }
    useEffect(()=> {
        fetchMealById()
    }, [id])

    return (
        <MealsInfoContainer status={meal.status}>
            <MealsInfoHeader status={meal.status}>
                <IconContainer onPress={()=> navigation.navigate("home")}>
                    <Icon/>
                </IconContainer>
                <TitleMealsInfo>Refeição</TitleMealsInfo>
            </MealsInfoHeader>

            <MealsInfoMain>
                <Title>{meal.name}</Title>
                <Subtitle>{meal.description}</Subtitle>

                <TitleDataHour>Data e hora</TitleDataHour>
                <SubtitleDataHour>{meal.date} às {meal.hour}</SubtitleDataHour>

                <Status>
                    <Bullet status={meal.status}/>
                    <TextStatus>{meal.status === "sim" ? "dentro da dieta" : "fora da dieta"}</TextStatus>
                </Status>

                <Button title="Editar refeição" onPress={()=> navigation.navigate("editmeals", {id})}>
                    <PencilLine size={18} color="white"/>
                </Button>
                <Button type="secondary" title="Excluir refeição" onPress={handleMealRemove}>
                    <Trash size={18} color="black"/>
                </Button>
            </MealsInfoMain>
        </MealsInfoContainer>
    )
}