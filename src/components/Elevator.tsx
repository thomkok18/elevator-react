import React, {useState} from "react";
import ButtonList from "./ButtonList";

/**
 * TODO: Elevator starts with 0 delay. Each floor is 2 seconds delay.
 * TODO: If you choose to go up, but choose a lower floor, your floor is going to be last in the array.
 */
const Elevator = () => {
    const [floorsToGo, setFloorsToGo] = useState([]);
    const floors: number = 5;

    return (
        <ButtonList floors={floors}/>
    );
};

export default Elevator;