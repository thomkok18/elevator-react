import React from "react";
import {IPersonState} from "../redux/interfaces/person";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCurrentPersonFloor} from "../redux/actions/person";
import {IElevatorState} from "../redux/interfaces/elevator";
import {setDoor} from "../redux/actions/elevator";

const Stairs = () => {
    const elevator: IElevatorState = useSelector((state: RootState) => state.elevator);
    const person: IPersonState = useSelector((state: RootState) => state.person);
    const dispatch = useDispatch();

    const changeFloor = (direction: "up" | "down") => {
        if (elevator.isMoving) return;

        const newFloor = direction === "up" ? person.currentFloor + 1 : person.currentFloor - 1;

        if (newFloor < -3 || newFloor > 10) return;
        if (elevator.isOpen) dispatch(setDoor(false));

        dispatch(setCurrentPersonFloor(newFloor));
    };

    return (
        <div className="relative">
            <img src="/images/stairs/up-down.jpg" alt={"Stairs"} height="360" width="540" />
            {
                person.currentFloor !== 10 &&
                <div className="absolute top-[0] right-[0] h-full w-1/2 cursor-pointer" onClick={() => changeFloor("up")}></div>
            }
            {
                person.currentFloor !== -3 &&
                <div className="absolute bottom-[0] left-[0] h-full w-1/2 cursor-pointer" onClick={() => changeFloor("down")}></div>
            }
        </div>
    );
}

export default Stairs;