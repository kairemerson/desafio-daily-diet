import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {  Bullet, BulletNot, ButtonChoice, ButtonChoiceNot, ChoiceContainer, ChoiceView, DateHourContainer, DateHourView, Icon, IconContainer,  Label,  NewMealContainer, NewMealsHeader, NewMealsMain, TextButton, TitleNewMeals } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { mealsGetById } from "@storage/meals/mealsGetById";
import { MealDTO } from "src/dtos/MealDTO";
import { mealUpdateById } from "@storage/meals/mealUpdateById";

type RotesParams = {
    id: string
}

export function EditMeals() {

    const navigation = useNavigation()

    const routes = useRoute()

    const {id} = routes.params as RotesParams

    const [meal, setMeal] = useState<MealDTO>({} as MealDTO)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [status, setStatus] = useState<"sim" | "nao">("sim")

    async function handleNewMeals() {
        await mealUpdateById(id, date, hour, name, description, status)
        navigation.navigate("feedback", {status: status})
    }

    async function fetchMealById(){
        const mealById = await mealsGetById(id)

        if(mealById){
            setMeal(mealById)
            setName(mealById.name)
            setDescription(mealById.description)
            setDate(mealById.date)
            setHour(mealById.hour)
            setStatus(mealById.status)
        }

    }

    useEffect(()=> {
        fetchMealById()
        
    }, [])

    return (
        <NewMealContainer>
            <NewMealsHeader>
                <IconContainer onPress={()=> navigation.goBack()}>
                    <Icon/>
                </IconContainer>
                <TitleNewMeals>Editar refeição</TitleNewMeals>
            </NewMealsHeader>

            <NewMealsMain>
              
                <Label>Nome</Label>
                <Input value={name} onChangeText={setName}/>

                <Label>Descrição</Label>
                <Input multiline height={120} defaultValue={meal.description} value={description} onChangeText={setDescription}/>

                <DateHourContainer>
                    <DateHourView>
                        <Label>Data</Label>
                        <Input defaultValue={meal.date} value={date} onChangeText={setDate}/>

                    </DateHourView>
                    <DateHourView>
                        <Label>Hora</Label>
                        <Input defaultValue={meal.hour} value={hour} onChangeText={setHour}/>

                    </DateHourView>

                </DateHourContainer>

                <ChoiceContainer>
                    <Label>Está dentro da dieta?</Label>
                    <ChoiceView>
                        <ButtonChoice onPress={()=> setStatus("sim")} status={status}>
                            <Bullet/><TextButton>Sim</TextButton>
                        </ButtonChoice>

                        <ButtonChoiceNot onPress={()=> setStatus("nao")} status={status}>
                            <BulletNot/><TextButton>Não</TextButton>
                        </ButtonChoiceNot>
                    </ChoiceView>
                    
                </ChoiceContainer>

                <Button title="Salvar alterações" onPress={handleNewMeals}></Button>

            </NewMealsMain>
        </NewMealContainer>
    )
}