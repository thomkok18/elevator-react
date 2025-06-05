import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IPersonState} from "../redux/interfaces/person";

const Floor = () => {
    const person: IPersonState = useSelector((state: RootState) => state.person);

	return (
		<div className="flex justify-between border border-black rounded text-center bg-gray-300 h-8 w-36 px-2 py-1">
            <div>Current floor:</div>
            <div>{person.currentFloor}</div>
        </div>
	);
}

export default Floor;