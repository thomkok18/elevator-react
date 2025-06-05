export const setDoor = (b: boolean) => {
	return {
		type: 'SET_DOOR',
		payload: b
	}
}

export const setMoving = (b: boolean) => {
    return {
        type: 'SET_MOVING',
        payload: b
    }
}

export const setCallUpOrDown = (s: "up" | "down" | "unselected") => {
	return {
		type: 'SET_CALL_UP_OR_DOWN',
		payload: s
	}
}

export const setCurrentElevatorFloor = (n: number) => {
	return {
		type: 'SET_CURRENT_ELEVATOR_FLOOR',
		payload: n
	}
}