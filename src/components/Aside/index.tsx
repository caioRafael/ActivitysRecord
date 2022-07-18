import { FC } from "react";
import {RiInboxFill} from 'react-icons/ri'
import {IoAnalyticsSharp} from 'react-icons/io5'
import { Container, Content, MenuOption } from "./styles";

const Aside:FC = () => {
    return(
        <Container>
            <header>
                <img src="https://avatars.githubusercontent.com/u/29779941?v=4" alt="user" />
                <h3>Caio Rafael</h3>
            </header>
            <Content>
                <MenuOption>
                    <RiInboxFill size={25} color="#3b82f6"/>
                    <h4>Minhas atividades</h4>
                </MenuOption>
                <MenuOption>
                    <IoAnalyticsSharp size={25} color="#3b82f6"/>
                    <h4>Analises</h4>
                </MenuOption>
            </Content>
        </Container>
    )
}

export default Aside