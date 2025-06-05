import {IElevatorState} from "../interfaces/elevator";

const INITIAL_STATE: IElevatorState = {
    currentFloor: 5,
    isOpen: false,
    isMoving: false,
    callElevator: "unselected"
};

const elevatorReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case 'SET_DOOR':
            return {
                ...state,
                isOpen: action.payload
            };
        case 'SET_MOVING':
            return {
                ...state,
                isMoving: action.payload
            };
        case 'SET_CALL_UP_OR_DOWN':
            return {
                ...state,
                callElevator: action.payload
            };
        case 'SET_CURRENT_ELEVATOR_FLOOR':
            return {
                ...state,
                currentFloor: action.payload
            };
        default:
            return state;
    }
};

export default elevatorReducer;