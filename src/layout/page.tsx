import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 2rem 6rem;
    background-color:#B3C5DB;
`
interface Iprops {
    children: ReactNode
}
const Page:React.FC<Iprops> = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}
export default Page