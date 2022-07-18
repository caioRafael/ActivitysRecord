import { FC } from "react";
import { Container } from "./styles";
import {Card} from '..';

interface CardListProps {
    name: string
    background: string,
    color: string
}

const CardList:FC<CardListProps> = (props) => {
    const {
        name,
        background,
        color
    } = props
    return (
        <Container>
            <header>
                <h3>{name}</h3>
                <div 
                    style={{
                    background: background,
                    color: color
                    }}
                >
                    <strong>5</strong></div>
            </header>

            <Card/>
        </Container>
    )
}

export default CardList