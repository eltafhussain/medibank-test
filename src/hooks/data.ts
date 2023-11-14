import { useEffect, useState } from 'react'
import { IDataList, IPetListByGender } from '@/interfaces'
import { getData, } from '../utils/API'

export const useData = () => {
    const [petsByOwner, setPetsByOwner] = useState<IDataList[]>([])
    const [petsByGender, setPetsByGender] = useState<IPetListByGender[]>([])
    useEffect(() => {
        async function fetchData() {
            // Fetch data from API or any source
            const response: IDataList[] = await getData()
            console.log('respnse', response)
            if (response) {
                // Parse data based on owner's gender
                const data: IPetListByGender[] = [{ type: 'Female', pets: [] }, { type: 'Male', pets: [] }]
                for (const person of response) {
                    const type = data.find((t: any) => t.type === person.gender)
                    if (person.pets)
                        for (const pet of person.pets) {
                            if (pet.type === 'Cat')
                                type.pets.push({ ...pet, owner: person })
                        }
                }
                // sort pets by name in alphabetical order
                for (const gender of data) {
                    gender.pets.sort((a, b) => a.name.localeCompare(b.name))
                }
                setPetsByGender(data)
                setPetsByOwner(response)
            }
        }
        if (petsByGender.length === 0)
            fetchData();
    })
    
    // hook returned value
    return { petsByOwner, petsByGender }
}

