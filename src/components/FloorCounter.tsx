import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IElevatorState} from "../redux/interfaces/elevator";
import {IPersonState} from "../redux/interfaces/person";

const FloorCounter = () => {
    const elevator: IElevatorState = useSelector((state: RootState) => state.elevator);
    const person: IPersonState = useSelector((state: RootState) => state.person);

    const [displayedFloor, setDisplayedFloor] = useState<string>("/images/floor-counter/0.png");

    const hasRun = useRef<boolean>(false);
    
    useEffect(() => {
        if (elevator.isMoving && !hasRun.current) {
            hasRun.current = true;

            const floorsLeft = Math.abs(elevator.currentFloor - person.currentFloor);

            if (floorsLeft === 0) {
                setDisplayedFloor("/images/floor-counter/0.png");
                return;
            }

            for (let i = 0; i < floorsLeft; i++) {
                const floorAtStep = elevator.currentFloor > person.currentFloor ? `/images/floor-counter/${floorsLeft - i}-down.png` : `/images/floor-counter/${floorsLeft - i}-up.png`;

                setTimeout(() => {
                    setDisplayedFloor(floorAtStep);
                }, 1000 * (i + 1));
            }

            setTimeout(() => {
                setDisplayedFloor("/images/floor-counter/0.png");
            }, 1000 * (floorsLeft + 1));
        }

        if (!elevator.isMoving) hasRun.current = false;
    }, [elevator.callElevator, elevator.currentFloor, elevator.isMoving, person.currentFloor]);

	return (
		<img src={displayedFloor} alt={"Elevator floor counter"} height="72" width="115" />
	);
}

export default FloorCounter;