import styled from "styled-components";

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    height: 100%;

    border-right: solid 2px #e9ebf0;

    header{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 85%;
        height: 80px;
        padding: 5px;

        border-bottom: solid 2px #e9ebf0;

        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: solid 3px #3b82f6;
            margin-right: 5px;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    padding: 10px 0;
    gap: 5px;

    border-bottom: solid 2px #e9ebf0;
`

export const MenuOption = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 4px 0;
    width: 100%;

    h4{
        margin-left: 5px;
    }
`