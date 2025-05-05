import { Destak, FeedbackContainer, Image, Subtitle, Title } from "./styles";
import illustration from "@assets/Illustration.png"
import illustration2 from "@assets/Illustration2.png"
import { Button } from "@components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";

type RouteParams = {
    status: string
}

export function Feedback() {
    const navigation = useNavigation()

    const route = useRoute()
    const {status} = route.params as RouteParams

    return(
        <FeedbackContainer>
            <Title status={status}>{status === "sim" ? "Continue assim!" : "Que pena!"}</Title>
            {status === "sim" ? <Subtitle>Você continua <Destak>dentro da dieta.</Destak>  Muito bem!</Subtitle> : <Subtitle>Você <Destak>saiu da dieta</Destak> dessa vez, mas continue se esforçando e não desista!</Subtitle>}
            <Image source={status === "sim" ? illustration : illustration2}/>

            <Button title="Ir para página inicial" onPress={()=> navigation.navigate("home")}/>
        </FeedbackContainer>
    )
}