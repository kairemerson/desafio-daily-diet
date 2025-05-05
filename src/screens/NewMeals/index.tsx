import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {  Bullet, BulletNot, ButtonChoice, ButtonChoiceNot, ChoiceContainer, ChoiceView, DateHourContainer, DateHourView, Icon, IconContainer,  Label,  NewMealContainer, NewMealsHeader, NewMealsMain, TextButton, TitleNewMeals } from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { mealsCreate } from "@storage/meals/mealsCreate";

import 'react-native-get-random-values';

import { v4 as uuidv4 } from 'uuid';
import { Alert } from "react-native";


export function NewMeals() {

    const navigation = useNavigation()

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [hour, setHour] = useState("")
    const [status, setStatus] = useState("")

    async function handleNewMeals() {
        if(name.trim().length === 0) {
            return Alert.alert("Nova refeição", "Informe o nome da refeição")
        }
        if(description.trim().length === 0) {
            return Alert.alert("Nova refeição", "Informe a descrição da refeição")
        }
        if(date.trim().length === 0) {
            return Alert.alert("Nova refeição", "Informe a data da refeição")
        }
        if(hour.trim().length === 0) {
            return Alert.alert("Nova refeição", "Informe o horario da refeição")
        }
        if(status.length === 0) {
            return Alert.alert("Nova refeição", "Marque uma das opções: sim ou não")
        }

        try {
            const id = uuidv4()
            await mealsCreate(date, id, hour, name, description, status)
            navigation.navigate("feedback", {status: status})
            
        } catch (error) {
            console.log("NewMeals:", error)
        }
    }

    return (
        <NewMealContainer>
            <NewMealsHeader>
                <IconContainer onPress={()=> navigation.navigate("home")}>
                    <Icon/>
                </IconContainer>
                <TitleNewMeals>Nova refeição</TitleNewMeals>
            </NewMealsHeader>

            <NewMealsMain>
              
                <Label>Nome</Label>
                <Input onChangeText={setName} value={name}/>

                <Label>Descrição</Label>
                <Input multiline height={120} onChangeText={setDescription} value={description}/>

                <DateHourContainer>
                    <DateHourView>
                        <Label>Data</Label>
                        <Input onChangeText={setDate} value={date}/>

                    </DateHourView>
                    <DateHourView>
                        <Label>Hora</Label>
                        <Input onChangeText={setHour} value={hour}/>

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

                <Button title="Cadastrar refeição" onPress={handleNewMeals}></Button>

            </NewMealsMain>
        </NewMealContainer>
    )
}