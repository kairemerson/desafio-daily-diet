import AsyncStorage from "@react-native-async-storage/async-storage"
import { MEALS_COLLECTION } from "@storage/storageConfig"
import { mealsGetAll } from "./mealsGetAll"


export async function mealsCreate(date: string, id: string, hour: string, name: string, description: string, status: string) {
    try {

        const storedMeals = await mealsGetAll()

        const storage = JSON.stringify([...storedMeals, {date, id, hour, name, description, status}])

        await AsyncStorage.setItem(MEALS_COLLECTION, storage)

    } catch (error) {
        throw error
    }
}
