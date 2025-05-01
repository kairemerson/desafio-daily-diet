import { Button } from "@components/Button";
import { MealsContainer, TitleCard, TitleMeals } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { SectionList, Text, View } from "react-native";
import { MealsCard } from "@components/MealsCard";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ListEmpty } from "@components/ListEmpty";
import { mealsGetAll } from "@storage/meals/mealsGetAll";
import { MealDTO } from "src/dtos/MealDTO";

type SectionData = {
  title: string
  data: MealDTO[]
}

export function Meals() {

  const navigation = useNavigation()

    const [meals, setMeals] = useState<SectionData[]>([])
     

    async function fetchMeals() {
      try {
        const data = await mealsGetAll()

        const mealsGrouped = data.reduce((acc: SectionData[], curr: MealDTO) => {
          const group = acc.find(item => item.title === curr.date);
          if (group) {
            group.data.push(curr);
          } else {
            acc.push({ title: curr.date, data: [curr] });
          }
          return acc;
        }, []);

        console.log("data: ", data)
        console.log("mealsGrouped: ", mealsGrouped)
        setMeals(mealsGrouped)

      } catch (error) {
        console.log("Meals: ",error)
      }
    }

    useFocusEffect(useCallback(()=> {
      fetchMeals()

    }, []))


    return(

        <MealsContainer>
            <TitleMeals>Refeições</TitleMeals>
            <Button 
              title="Nova refeição" 
              type="primary"
              onPress={()=> navigation.navigate("newMeals")}
            
            ></Button>

            <View style={{ flex: 1 }}>
              <SectionList
                  sections={meals}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> (
                      <MealsCard meals={item} onPress={()=> navigation.navigate("mealsinfo", {id: item.id})}/>
                  )}
                  renderSectionHeader={({section: {title}})=> (
                      <TitleCard>{title}</TitleCard>
                  )}
                  ListEmptyComponent={()=> <ListEmpty message="Cadastre uma refeição"/>}
                  contentContainerStyle={meals.length === 0 ? { flex: 1 } : {}}
              />

            </View>
        </MealsContainer>
    )
}