import { IPetListByGender, IPetsWithOwner } from "@/interfaces";
import React from "react";
import styled from "styled-components";

const PetItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Caption = styled.p`
    font-size: 1rem;
    color: #888;
`;

interface IPetProps {
    index: number;
    pIndex: number;
    pet: IPetsWithOwner;
}

const PetItem: React.FC<IPetProps> = ({ pet, index, pIndex }) => (
    <PetItemContainer>
        <p key={pet.name} data-testid={`item-${index}-pet-${pIndex}-name`}>
            {pet.name}
        </p>
        <Caption
            data-testid={`item-${index}-pet-${pIndex}-owner`}
        >{`${pet.owner.name} - ${pet.owner.age}`}</Caption>
    </PetItemContainer>
);

export default PetItem;
