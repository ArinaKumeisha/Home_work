import {initialPeople, InitialStateType} from "../HW8";

type ActionsType =
    ReturnType<typeof sortUp> |
    ReturnType<typeof checkDown> |
    ReturnType<typeof ageAC>

export const homeWorkReducer = (state = initialPeople, action: ActionsType): InitialStateType[] => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            const copyState = [...state].sort((a, b) => a.name > b.name ? 1 : -1)
            return copyState
        }
        case 'checkDown': {
            const copyState = [...state].sort((a, b) => a.name > b.name ? -1 : 1)
            return copyState
        }
        case 'age': {
            return state.filter(c => c.age > 18)
        }
        default:
            return state
    }
}
export const sortUp = () => {
    return {
        type: 'sortUp',
    }
}

export const checkDown = () => {
    return {
        type: 'checkDown',
    }
}
export const ageAC = () => {
    return {
        type: 'age'
    }
}