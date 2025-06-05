import React, {useEffect, useState} from "react";
import {IElevatorState} from "../redux/interfaces/elevator";
import {IPersonState} from "../redux/interfaces/person";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCallUpOrDown, setCurrentElevatorFloor, setDoor, setMoving} from "../redux/actions/elevator";

const PanelOutside = () => {
    const elevator: IElevatorState = useSelector((state: RootState) => state.elevator);
    const person: IPersonState = useSelector((state: RootState) => state.person);
    const dispatch = useDispatch();

    const [displayOutsidePanel, setDisplayOutsidePanel] = useState<string>("/images/outside-panel/ground-unselected.png");

    /**
     * Sets the outside panel state to either "up" or "down" based on the desired direction.
     *
     * @param direction
     */
    const setPanelOutside = (direction: "up" | "down" | "unselected") => {
        const floorsLeft = Math.abs(elevator.currentFloor - person.currentFloor);

        if (floorsLeft === 0) {
            dispatch(setDoor(true));
            outsidePanel("unselected");
            return;
        }

        dispatch(setMoving(true));
        dispatch(setCallUpOrDown(direction));
        outsidePanel(direction);

        for (let i = 0; i <= floorsLeft; i++) {
            const floorAtStep = elevator.currentFloor > person.currentFloor ? elevator.currentFloor - i : elevator.currentFloor + i;

            setTimeout(() => {
                dispatch(setCurrentElevatorFloor(floorAtStep));
            }, 1000 * (i + 1));
        }

        setTimeout(() => {
            dispatch(setDoor(true));
            dispatch(setMoving(false));
            outsidePanel("unselected");
        }, 1000 * (floorsLeft + 2));
    };

    /**
     * Returns the image source for the outside panel based on the current floor and callElevator state.
     *
     * @param callElevator
     */
    const outsidePanel = (callElevator: string) => {
        if (callElevator === "up") {
            if (person.currentFloor === -3) return setDisplayOutsidePanel("/images/outside-panel/ground-up.png");
            return setDisplayOutsidePanel("/images/outside-panel/floor-up.png");
        }

        if (callElevator === "down") {
            if (person.currentFloor === 10) return setDisplayOutsidePanel("/images/outside-panel/roof-down.png");
            return setDisplayOutsidePanel("/images/outside-panel/floor-down.png");
        }
    };

    useEffect(() => {
        if (person.currentFloor === -3) return setDisplayOutsidePanel("/images/outside-panel/ground-unselected.png");
        if (person.currentFloor === 10) return setDisplayOutsidePanel("/images/outside-panel/roof-unselected.png");
        return setDisplayOutsidePanel("/images/outside-panel/floor-unselected.png");
    }, [elevator.currentFloor, person.currentFloor]);

    return (
        <div className="relative">
            <img
                src={displayOutsidePanel}
                alt={"Call elevator"}
                height="100"
                width="60"
            />
            {
                person.currentFloor !== 10 &&
                <div className="absolute top-[18px] left-[20px] h-[20px] w-[20px] cursor-pointer" onClick={() => setPanelOutside("up")} />
            }
            {
                person.currentFloor !== -3 &&
                <div className="absolute bottom-[20px] left-[20px] h-[20px] w-[20px] cursor-pointer" onClick={() => setPanelOutside("down")} />
            }
        </div>
    );
};

export default PanelOutside;