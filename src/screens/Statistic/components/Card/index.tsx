import { CardContainer, Subtitle, Title } from "./styles";

type Props = {
    title: number
    subtitle: string
    variant: "primary" | "secondary" | "neutral"
    fullwidth?: boolean
}

export function Card({title, subtitle, variant, fullwidth}: Props) {
    return(
        <CardContainer variant={variant} fullwidth={fullwidth}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </CardContainer>
    )
}