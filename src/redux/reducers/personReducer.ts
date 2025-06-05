import {IPersonState} from "../interfaces/person";

const INITIAL_STATE: IPersonState = {
	currentFloor: 0,
	inside: false,
};

const personReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case 'SET_CURRENT_PERSON_FLOOR':
			return {
				...state,
				currentFloor: action.payload
			};
		case 'SET_INSIDE':
			return {
				...state,
                inside: action.payload
			};
		default:
			return state;
	}
};

export default personReducer;