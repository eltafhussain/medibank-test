import React from 'react'
import styled, { ThemeProvider } from 'styled-components';
const Heading = styled.h1`
    padding: 0rem 2rem;
    text-align:center;
`
const Image = styled.img`
    width: inherit;
    height:15rem;
    object-fit:cover;
`
const Header: React.FC<any> = () => {
    return (
        <>
            <Image src={'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
            <Heading>{'The House of Pets'}</Heading>
        </>
    )
}
export default Header;