type InitialStateType = typeof initState
const initState = {
    themeColor: 'defaultValue'
}

export const themeReducer = (state = initState, action: ChangeThemeAT): InitialStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME-COLOR': {
            return {...state, themeColor: action.themeColor}
        }
        default:
            return state;
    }
}
export type ChangeThemeAT = ReturnType<typeof changeThemeC>
export const changeThemeC = (themeColor: string) => {
    return {
        type: 'CHANGE-THEME-COLOR',
        themeColor,
    }
}