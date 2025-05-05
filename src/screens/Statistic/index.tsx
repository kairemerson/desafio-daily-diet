import { CardsContainer, Icon, IconContainer, StatisticContainer, StatistiHeader, StatistiMain, SubtitleStatistic, Title, TitleStatistic } from "./styles";
import { Card } from "./components/Card";
import { useNavigation, useRoute } from "@react-navigation/native";

type RoutesParams = {
    totalAmount: number
    percent: number
    statusYes: number
    maxSequence: number
}

export function Statistic() {

    const navigation = useNavigation()

    const routes = useRoute()

    const {totalAmount, percent, statusYes, maxSequence} = routes.params as RoutesParams

    return(
        <StatisticContainer percent={percent}>
            <StatistiHeader percent={percent}>
                
                    <IconContainer onPress={()=> navigation.navigate("home")}>
                        <Icon percent={percent}/>
                    </IconContainer>
                    <TitleStatistic>{percent.toFixed(2)}%</TitleStatistic>
                    <SubtitleStatistic>das refeições dentro da dieta</SubtitleStatistic>
                
            </StatistiHeader>
            <StatistiMain>
                <Title>Estatísticas gerais</Title>
                <CardsContainer>
                    <Card title={maxSequence} subtitle="melhor sequencia de pratos dentro da dieta" variant="neutral" fullwidth={true}/>
                    <Card title={totalAmount} subtitle="refeições registradas" variant="neutral" fullwidth={true}/>
                    <Card title={statusYes} subtitle="refeições dentro da dieta" variant="primary" />
                    <Card title={totalAmount - statusYes} subtitle="refeições fora da dieta" variant="secondary" />

                </CardsContainer>
            </StatistiMain>
        </StatisticContainer>
    )
}