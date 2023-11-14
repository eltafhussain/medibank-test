import React, { useEffect, useState } from 'react';
import { useData } from './hooks/data'
import Page from './layout/page'
import PetList from './components/PetLists'
import styled, { ThemeProvider } from 'styled-components';
import Header from './layout/header'
const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
    font-family: sans-serif;
`
const Box = styled.div`
    width:30rem;
    background-color:#fff;
    box-shadow:1px 3px 20px rgba(0,0,0,.2);
`

function App() {
    return (
        <Page>
            <Container>
                <Box>
                    <Header/>
                    <PetList />
                </Box>
            </Container>
        </Page>
    );
}
export default App;