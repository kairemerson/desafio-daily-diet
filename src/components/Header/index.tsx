import { HeaderContainer, Logo, UserImg } from "./styles";
import logoImg from "@assets/Logo.png"
import userImg from "@assets/user.png"

export function Header() {
    return(
        <HeaderContainer>
            <Logo source={logoImg}/>
            <UserImg source={userImg}/>
        </HeaderContainer>
    )
}