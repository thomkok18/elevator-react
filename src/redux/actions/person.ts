export const setCurrentPersonFloor = (n: number) => {
    return {
        type: 'SET_CURRENT_PERSON_FLOOR',
        payload: n
    }
}

export const setInside = (b: boolean) => {
    return {
        type: 'SET_INSIDE',
        payload: b
    }
}