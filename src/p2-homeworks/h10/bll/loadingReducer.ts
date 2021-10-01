type InitialStateType = typeof initState
const initState = {
isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingAT):InitialStateType => { // fix any
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}
type LoadingAT = ReturnType<typeof loadingAC>
export const loadingAC = (isLoading: boolean) => ({type: 'LOADING', isLoading})

