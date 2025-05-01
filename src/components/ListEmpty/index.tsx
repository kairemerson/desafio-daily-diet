import { Text, View } from "react-native";
import { ListEmptyContainer, Message } from "./styles";

type Props = {
    message: string
}

export function ListEmpty({message}: Props) {
    return(
        <ListEmptyContainer>
            <Message>{message}</Message>
        </ListEmptyContainer>
    )
}