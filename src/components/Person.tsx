import React from "react";
import Elevator from "./Elevator";
import Stairs from "./Stairs";
import {IPersonState} from "../redux/interfaces/person";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import PanelInside from "./PanelInside";

const Person = () => {
    const person: IPersonState = useSelector((state: RootState) => state.person);

    return (
        <>
            {
                !person.inside ?
            <div className="flex items-end px-72 mt-4">
                <div className="flex justify-center w-full">
                    <div>
                        <Elevator/>
                    </div>
                </div>
                <div>
                    <Stairs/>
                </div>
            </div> :
            <div className="flex justify-center items-center w-full px-72 mt-4">
                <PanelInside />
            </div>
            }
        </>
    );
}

export default Person;