import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPersonFloor, setInside} from "../redux/actions/person";
import {setCallUpOrDown, setCurrentElevatorFloor, setDoor, setMoving} from "../redux/actions/elevator";
import {IElevatorState} from "../redux/interfaces/elevator";
import {RootState} from "../redux/store";

const PanelInside = () => {
    const elevator: IElevatorState = useSelector((state: RootState) => state.elevator);
    const dispatch = useDispatch();

    const [displayedPanelCounter, setDisplayedPanelCounter] = useState<string>("/images/inside-panel/panel-counter/0.png");
    const [displayedPanel, setDisplayedPanel] = useState<string>("/images/inside-panel/panel/panel.png");

    const setPanelInside = (floor: number) => {
        if (floor < -3 || floor > 10) return;

        const floorsLeft = Math.abs(elevator.currentFloor - floor);
        const direction = Math.sign(elevator.currentFloor - floor) === 1 ? "down" : "up";

        if (floorsLeft === 0 && floor !== 0) {
            dispatch(setDoor(false));
            dispatch(setInside(false));
            return;
        }

        dispatch(setMoving(true));
        dispatch(setCallUpOrDown(direction));

        setDisplayedPanel(`/images/inside-panel/panel/panel-${floor}.png`);

        for (let i = 0; i < floorsLeft; i++) {
            const floorAtStep = direction === "up" ? elevator.currentFloor + (i + 1) : elevator.currentFloor - (i + 1);
            const floorCounter = floorsLeft - i;

            setTimeout(() => {
                setDisplayedPanelCounter(`/images/inside-panel/panel-counter/${floorCounter}-${direction}.png`);
                dispatch(setCurrentElevatorFloor(floorAtStep));
                dispatch(setCurrentPersonFloor(floorAtStep));
            }, 1000 * (i + 1));
        }

        setTimeout(() => {
            setDisplayedPanelCounter("/images/inside-panel/panel-counter/0.png");
            setDisplayedPanel(`/images/inside-panel/panel/panel.png`);
        }, 1000 * (floorsLeft + 1));

        setTimeout(() => {
            dispatch(setDoor(false));
            dispatch(setMoving(false));
            dispatch(setInside(false));
        }, 1000 * (floorsLeft + 2));
    }

    const getOut = () => {
        dispatch(setInside(false));
        dispatch(setDoor(false));
    }

    return (
        <div className="relative">
            <div>
                <img src={displayedPanelCounter} alt={"Elevator floor counter"} height="114" width="200" />
                <img src={displayedPanel} alt={"Elevator panel"} height="640" width="200" />
            </div>

            <div className="absolute top-[139px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(9)} />
            <div className="absolute top-[139px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(10)} />

            <div className="absolute top-[203px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(7)} />
            <div className="absolute top-[203px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(8)} />

            <div className="absolute top-[268px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(5)} />
            <div className="absolute top-[268px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(6)} />

            <div className="absolute top-[333px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(3)} />
            <div className="absolute top-[333px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(4)} />

            <div className="absolute top-[397px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(1)} />
            <div className="absolute top-[397px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(2)} />

            <div className="absolute top-[462px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(-1)} />
            <div className="absolute top-[462px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(0)} />

            <div className="absolute top-[527px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(-3)} />
            <div className="absolute top-[527px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setPanelInside(-2)} />

            <div className="absolute top-[604px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={() => setDisplayedPanel("/images/inside-panel/panel/panel.png")} />
            <div className="absolute top-[604px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setDisplayedPanel("/images/inside-panel/panel/panel.png")} />

            <div className="absolute top-[669px] left-[39px] h-[52px] w-[52px] cursor-pointer" onClick={getOut} />
            <div className="absolute top-[669px] left-[109px] h-[52px] w-[52px] cursor-pointer" onClick={() => setDisplayedPanel("/images/inside-panel/panel/panel.png")} />
        </div>
    );
};

export default PanelInside;