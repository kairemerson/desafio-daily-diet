import { useNavigation } from "@react-navigation/native";
import { Icon, IconContainer, PercentContainer, SubtitlePercent, TitlePercent } from "./styles";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { useEffect, useState } from "react";
import { MealDTO } from "src/dtos/MealDTO";


export function Percent() {

    const [totalAmount, setTotalAmount] = useState(0);
    const [percent, setPercent] = useState(0);
    const [statusYes, setStatusYes] = useState(0);
    const [maxSequence, setMaxSequence] = useState(0)
    
    const navigation = useNavigation()
    
    async function getPercentMeals() {

        let max = 0
        let currentSequence = 0

        const data: MealDTO[] = await mealsGetAll()
    
        const total =  data.length
        
        const statusYes = data.filter((item: MealDTO) => item.status === "sim").length

        const calculatedPercent = total > 0 ? (statusYes / total) * 100 : 0;

        for (const item of data) {
            if(item.status === "sim"){
                currentSequence++
                if (currentSequence > max) {
                    max = currentSequence
                }
            }else {
                currentSequence = 0
            }
        }

        setMaxSequence(max)

        setTotalAmount(total)
        setPercent(calculatedPercent)
        setStatusYes(statusYes)
        
    }

    useEffect(()=> {
        getPercentMeals()
    }, [])

    return(
        <PercentContainer percent={percent}>
            <IconContainer onPress={()=> navigation.navigate("statistics",{totalAmount, percent, statusYes, maxSequence})}>
                <Icon percent={percent}/>
            </IconContainer>
            <TitlePercent>{percent.toFixed(2)}%</TitlePercent>
            <SubtitlePercent>das refeições dentro da dieta</SubtitlePercent>
        </PercentContainer>
    )
}