import React, { useState } from 'react'
import { useData } from '../hooks/data'
import styled from 'styled-components'
import { IPetListByGender, IPetsWithOwner } from '@/interfaces'
const Wrapper = styled.div`
    /* min-width: 40rem; */
`
const Box = styled.div`
    display: flex;
    padding: .8rem 2rem;
    border-top:1px solid #eee;
    background-color:#fff;
    cursor: pointer;
    align-items:center;
    &:hover {
        background-color:#497BC3;
        color: #fff;
        p {
            color: #fff
        }
    }
`

const Title = styled.h2`
    font-size:1.2rem;
    margin:0;
    margin-bottom:.4rem;
`
const Caption = styled.p`
    font-size:1rem;
    color: #888;
    /* margin:0; */
`
const Spacer = styled.div`
    flex:1;
`
interface IListItemProps {
    gender: IPetListByGender,
    expanded: boolean,
    index: number,
    onExpand: Function
}

interface IPetProps {
    index: number
    pIndex: number
    pet: IPetsWithOwner
}

const PetLists: React.FC<any> = () => {
    const { petsByGender } = useData()
    const [expanded, setExpanded] = useState(0);
    const handleExpand = (index: number) => {
        setExpanded(index)
    }
    return (
        <Wrapper>
            {
                petsByGender.length > 0 && petsByGender?.map((gender, index) =>
                    <ListItem
                        key={'gender' + index}
                        index={index}
                        gender={gender}
                        expanded={index === expanded}
                        onExpand={handleExpand}
                    />
                )
            }
        </Wrapper>
    )
}
interface PetListProps {
    expanded?: boolean
}
const PetListWrapper = styled.div<PetListProps>`
     padding: .5rem 2rem;
     background-color:#eee;
`

const ListItem: React.FC<IListItemProps> = ({ gender, index, onExpand, expanded }) => {
    const petNumber = gender?.pets?.length || 0
    return (
        <div key={'item-' + index}>
            <Box key={gender.type} data-testid={'item-' + index} onClick={() => onExpand(index)} >
                <Title data-testid={`item-${index}-title`} >{gender.type}</Title>
                <Spacer />
                <p data-testid={`item-${index}-pet`}>{`${petNumber} pet${petNumber > 1 ? 's' : ''}`} </p>
            </Box>
            {(gender.pets && expanded) &&
                <PetListWrapper data-testid={`item-${index}-expanded`} expanded={expanded}>
                    {gender.pets?.map((pet: any, pIndex: number) =>
                        <PetItem key={'pet' + pIndex} pet={pet} index={index} pIndex={pIndex} />
                    )}
                </PetListWrapper>
            }
        </div>
    )
}
const PetItemContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const PetName = styled.p`
    padding-left:1rem;
`
const petTypes: any = {
    'Cat': '🐈',
    'Fish': '🐟',
    'Dog': '🐕'
}

const PetItem: React.FC<IPetProps> = ({ pet, index, pIndex }) => {
    const { type } = pet
    const typeIcon = petTypes[type]
    return (
        <PetItemContainer>
            <p key={pet.name}
                data-testid={`item-${index}-pet-${pIndex}-name`}
            >
                {pet.name}
            </p>
            <Caption data-testid={`item-${index}-caption`}>{`${pet.owner.name} - ${pet.owner.age}`}</Caption>
        </PetItemContainer>
    )
}
export default PetLists;