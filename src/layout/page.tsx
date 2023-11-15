import React, { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0rem 6rem;
    background-color: #b3c5db;
    min-height: 100vh;
    display: flex;
    justify-content: center;
`;

interface Iprops {
    children: ReactNode;
}
const Page: React.FC<Iprops> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Page;
