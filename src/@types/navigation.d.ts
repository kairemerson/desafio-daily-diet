

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined
            statistics: {
                totalAmount: number
                percent: number
                statusYes: number
                maxSequence: number
            }
            newMeals: undefined
            feedback: {
                status: string
            }
            mealsinfo: {
                id: string
            }
            editmeals: {
                id: string
            }
        }
    }
}