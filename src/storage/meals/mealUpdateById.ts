import { MealDTO } from "src/dtos/MealDTO"
import { mealsGetAll } from "./mealsGetAll"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig"


export async function mealUpdateById(id: string, date: string, hour: string, name: string, description: string, status: "sim" | "nao" ) {
    try {
        let storedMeals: MealDTO[] = await mealsGetAll()
        
        const newData = {id, date, hour, name, description, status}

        const indexMeal = storedMeals.findIndex((meal)=> meal.id === id)

        if(indexMeal !== -1){
            storedMeals.splice(indexMeal, 1, newData)
        }

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storedMeals))

    } catch (error) {
        throw error
    }
}