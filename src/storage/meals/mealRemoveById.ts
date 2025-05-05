import { MealDTO } from "src/dtos/MealDTO"
import { mealsGetAll } from "./mealsGetAll"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig"


export async function mealsRemoveById(id: string) {
    try {
        const storedMeals: MealDTO[] = await mealsGetAll()        

        const meals = storedMeals.filter((meal)=> meal.id !== id)

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(meals))


    } catch (error) {
        throw error
    }
}