import React, { useState } from "react";
import { useData } from "../hooks/data";
import GenderItem from "./GenderItem";

// List down the pets by owners gender
const PetListsByOwnerGender: React.FC<any> = () => {
    const { petsByGender } = useData();
    const [expanded, setExpanded] = useState(0);
    const handleExpand = (index: number) => {
        setExpanded(index);
    };

    return (
        <div>
            {petsByGender?.map((gender, index) => (
                <GenderItem
                    key={"gender" + index}
                    index={index}
                    gender={gender}
                    expanded={index === expanded}
                    onExpand={handleExpand}
                />
            ))}
        </div>
    );
};

export default PetListsByOwnerGender;
