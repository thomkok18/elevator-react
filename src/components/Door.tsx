import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {IElevatorState} from "../redux/interfaces/elevator";
import {setInside} from "../redux/actions/person";
import {IPersonState} from "../redux/interfaces/person";

const Door = () => {
	const elevator: IElevatorState = useSelector((state: RootState) => state.elevator);
    const person: IPersonState = useSelector((state: RootState) => state.person);
    const dispatch = useDispatch();

    const [displayedDoor, setDisplayedDoor] = useState<string>("/images/door/closed.png");

    const hasRun = useRef<boolean>(false);

    useEffect(() => {
        if (!hasRun.current) {
            if (elevator.isOpen && elevator.currentFloor === person.currentFloor) {
                setTimeout(() => setDisplayedDoor("/images/door/half-open.png"), 500);
                setTimeout(() => setDisplayedDoor("/images/door/open.png"), 1000);
            } else {
                setDisplayedDoor("/images/door/closed.png");
            }

            if (!elevator.isOpen) hasRun.current = false;
        }
    }, [elevator.currentFloor, elevator.isMoving, elevator.isOpen, person.currentFloor]);

    const enterElevator = () => {
        dispatch(setInside(true));
    };

	return (
		<div>
			<img
                className={elevator.isOpen ? "cursor-pointer" : ""}
				src={displayedDoor}
				alt={"Elevator door"}
				height="600"
				width="375"
                onClick={elevator.isOpen ? enterElevator : undefined}
			/>
		</div>
	);
}

export default Door;