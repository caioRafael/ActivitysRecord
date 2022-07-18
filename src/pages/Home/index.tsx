import { FC } from "react";
import { Aside } from "../../components";
import { ActivityContent } from "./components";
import { Container } from "./styles";

const Home: FC = () => {
    return(
        <Container>
            <Aside/>
            <ActivityContent/>
        </Container>
    )
}

export default Home