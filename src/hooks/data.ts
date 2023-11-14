import { useEffect, useState } from 'react'
import { IDataList, IPetListByGender } from '@/interfaces'
import { getData, } from '../utils/API'
const URL = "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json"

export const useData = () => {
    const [petsByOwner, setPetsByOwner] = useState<IDataList[]>([])
    const [petsByGender, setPetsByGender] = useState<IPetListByGender[]>([])
    useEffect(() => {
        async function fetchData() {
            const response: IDataList[] = await getData()
            console.log('respnse', response)
            if (response) {
                const data: IPetListByGender[] = [{ type: 'Female', pets: [] }, { type: 'Male', pets: [] }]
                for (const person of response) {
                    const type = data.find((t: any) => t.type === person.gender)
                    if (person.pets)
                        for (const pet of person.pets) {
                            if (pet.type === 'Cat')
                                type.pets.push({ ...pet, owner: person })
                        }
                }
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

    return { petsByOwner, petsByGender }
}

