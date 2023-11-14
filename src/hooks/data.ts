import { useEffect, useState } from 'react'

const URL = "https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json"
enum Types { 'Cat', 'Fish' }
export interface IPet {
    name: string,
    type: string
}
export interface IDataList {
    name: string,
    gender: string,
    age: number,
    pets: IPet[]
}

export const useData = () => {
    const [data, setData] = useState<IDataList[]>([])
    useEffect(() => {
        async function fetchData() {
            fetch(URL).then(res => res.json()).then((res) => {
                console.log('data', res)
                setData(res)
            })
        }
        if (data.length === 0)
            fetchData();
    })

    return { data }
}

