import React from "react";
import PanelOutside from "./PanelOutside";
import Door from "./Door";
import FloorCounter from "./FloorCounter";
import Floor from "./Floor";

const Elevator = () => {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center">
                <div className="mb-4">
                    <FloorCounter />
                </div>

                <Door />
            </div>
            <div className="flex items-center">
                <div className="flex items-center ml-4">
                    <PanelOutside />
                </div>
                <div className="flex items-center ml-10">
                    <Floor />
                </div>
            </div>
        </div>

    );
};

export default Elevator;