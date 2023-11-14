import React, { useState } from 'react'
import { useData } from '../hooks/data'
import styled from 'styled-components'
import { IDataList, IPet } from '../hooks/data'
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
const TitleWrapper = styled.div`
    display: 'flex';
    flex-direction: column;
    justify-content:center;
`
const Title = styled.h2`
    font-size:1.2rem;
    margin:0;
    margin-bottom:.4rem;
`
const Caption = styled.p`
    font-size:1rem;
    color: #888;
    margin:0;
`
const Spacer = styled.div`
    flex:1;
`

interface IListItemProps {
    person: IDataList,
    expanded: boolean,
    index: number,
    onExpand: Function
}
interface IPetProps {
    pet: IPet
}

const PetLists: React.FC<any> = () => {
    const { data } = useData()
    const [expanded, setExpanded] = useState(0);
    const handleExpand = (index: number) => {
        setExpanded(index)
    }
    return (
        <Wrapper>
            {
                data.length > 0 && data?.map((person, index) =>
                    <ListItem
                        index={index}
                        person={person}
                        expanded={index === expanded}
                        onExpand={handleExpand}
                    />
                )
            }
        </Wrapper>
    )
}
interface PetListProps {
    expanded: boolean
}
const PetListWrapper = styled.div<PetListProps>`
     padding: .5rem 2rem;
     background-color:#eee;
     /* height: ${p => p.expanded ? 'auto' : 0};
     transition: all 0.3s ease-out; */
`

const ListItem: React.FC<IListItemProps> = ({ person, index, onExpand, expanded }) => {
    const petNumber = person?.pets?.length || 0
    return (
        <div>
            <Box key={person.name} onClick={() => onExpand(index)}>
                <TitleWrapper>
                    <Title>{person.name}</Title>
                    <Caption>{`${person.gender} - ${person.age}`}</Caption>
                </TitleWrapper>
                <Spacer />
                <p>{`${petNumber} pet${petNumber > 1 ? 's' : ''}`} </p>
            </Box>
            {(person.pets && expanded) &&
                <PetListWrapper expanded={expanded}>
                    {person.pets?.map(pet =>
                        <PetItem pet={pet} />
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

const petTypes = {
    'Cat': '🐈',
    'Fish': '🐟',
    'Dog': '🐕'
}
const PetItem: React.FC<IPetProps> = ({ pet }) => {
    const { type } = pet
    const typeIcon = type === 'Cat' ? '🐈' :
        type == 'Dog' ? '🐕' : '🐟'
    return (
        <PetItemContainer>
            <p key={pet.name}>{pet.name}</p>
            <p key={pet.type}>{typeIcon}</p>
        </PetItemContainer>
    )
}
export default PetLists;