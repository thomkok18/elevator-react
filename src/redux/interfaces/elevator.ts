export interface IElevatorState {
	currentFloor: number,
	isOpen: boolean,
	isMoving: boolean,
	callElevator: "up" | "down" | "unselected"
}