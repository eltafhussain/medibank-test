import { useEffect, useState } from "react";
import { IDataList, IPetListByGender } from "@/interfaces";
import { getData } from "../utils/api";

export const useData = () => {
    const [petsByOwner, setPetsByOwner] = useState<IDataList[]>([]);
    const [petsByGender, setPetsByGender] = useState<IPetListByGender[]>([]);

    useEffect(() => {
        async function fetchData() {
            // Fetch data from API or any source
            const response: IDataList[] = await getData();

            if (!response) return;

            // Parse data based on owner's gender
            const data: IPetListByGender[] = [
                { type: "Female", pets: [] },
                { type: "Male", pets: [] },
            ];

            response.forEach((person) => {
                const type = data.find((t: any) => t.type === person.gender);
                person?.pets?.forEach((pet) => {
                    if (pet.type === "Cat") type.pets.push({ ...pet, owner: person });
                });
            });

            data.forEach((gender) => {
                gender.pets.sort((a, b) => a.name.localeCompare(b.name));
            });
            setPetsByGender(data);
            setPetsByOwner(response);
        }
        if (petsByGender.length === 0) fetchData();
    });

    // hook returned value
    return { petsByOwner, petsByGender };
};
