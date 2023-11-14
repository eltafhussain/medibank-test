import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 2rem 6rem;
    background-color:#B3C5DB;
`
const Page: React.FC<any> = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default Page