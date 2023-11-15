import React from "react";
import Page from "./layout/page";
import PetListByGender from "./components/PetListByGender";
import styled from "styled-components";
import Header from "./layout/header";
import "./global.css";
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Box = styled.div`
    width: 30rem;
    margin-top: 5rem;
    background-color: #fff;
    box-shadow: 1px 3px 20px rgba(0, 0, 0, 0.2);
`;

const App = () => (
    <Page>
        <Container>
            <Box>
                <Header />
                <PetListByGender />
            </Box>
        </Container>
    </Page>
);

export default App;
