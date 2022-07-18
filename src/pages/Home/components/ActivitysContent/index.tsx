import { FC } from "react";
import { Container } from "./styles";
import {CardList} from '../'

const ActivityContent: FC = () => {
    return (
        <Container>
            {columns.map(column => (
                <CardList 
                    key={column.name}   
                    name={column.name}
                    background={column.background}
                    color={column.color}
                />
            ))}
        </Container>
    )
}

export default ActivityContent

const columns = [
    {
        name: 'Novo',
        background: '#f6f2e2',
        color: '#d09720'
    },
    {
        name: 'Em progresso',
        background: '#f0e8fa',
        color: '#9333ea'
    },
    {
        name: 'Finalizado',
        background: '#e2f4ea',
        color: '#16a34a'
    },
    {
        name: 'Abandonado',
        background: '#f7e7f0',
        color: '#db2777'
    }
]