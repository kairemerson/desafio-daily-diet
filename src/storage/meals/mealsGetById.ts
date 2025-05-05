import { MealDTO } from "src/dtos/MealDTO"
import { mealsGetAll } from "./mealsGetAll"


export async function mealsGetById(id: string) {
    try {
        const storedMeals: MealDTO[] = await mealsGetAll()

        const storedMeal = storedMeals.find((meal)=> meal.id === id)

        return storedMeal
        
    } catch (error) {
        throw error
    }
}