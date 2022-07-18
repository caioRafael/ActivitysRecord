import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:  calc(100% / 4);
    height: 100%;
    padding: 0 10px;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 0 10px;

        div{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
`