import { IPetListByGender } from "@/interfaces";
import React from "react";
import styled from "styled-components";
import PetItem from "./PetItem";

interface IListItemProps {
    gender: IPetListByGender;
    expanded: boolean;
    index: number;
    onExpand: Function;
}

const Title = styled.h2`
    font-size: 1.2rem;
    margin: 0;
    margin-bottom: 0.4rem;
`;

const Box = styled.div`
    display: flex;
    padding: 0.8rem 2rem;
    border-top: 1px solid #eee;
    background-color: #fff;
    cursor: pointer;
    align-items: center;
    &:hover {
        background-color: #497bc3;
        color: #fff;
        p {
            color: #fff;
        }
    }
`;
const Spacer = styled.div`
    flex: 1;
`;

const PetListWrapper = styled.div`
    padding: 0.5rem 2rem;
    background-color: #eee;
`;

const GenderItem: React.FC<IListItemProps> = ({ gender, index, onExpand, expanded }) => {
    const petNumber = gender?.pets?.length || 0;
    return (
        <div key={"item-" + index}>
            <Box key={gender.type} data-testid={"item-" + index} onClick={() => onExpand(index)}>
                <Title data-testid={`item-${index}-title`}>{gender.type}</Title>
                <Spacer />
                <p data-testid={`item-${index}-pet`}>{`${petNumber} pet${petNumber > 1 ? "s" : ""}`} </p>
            </Box>
            {gender.pets && expanded && (
                <PetListWrapper data-testid={`item-${index}-expanded`}>
                    {gender.pets?.map((pet: any, pIndex: number) => (
                        <PetItem key={"pet" + pIndex} pet={pet} index={index} pIndex={pIndex} />
                    ))}
                </PetListWrapper>
            )}
        </div>
    );
};

export default GenderItem;
