const reducer = (state, action) => {
    if (action.type === 'SHOWPOPUPBAR') {
        return {
            ...state,
            showPopUp: true
        }
    }
    if (action.type === 'HIDE_POP_UP_BAR') {
        return {
            ...state,
            showPopUp: false
        }
    }
    if (action.type === 'NOTE_TITLE') {
        return {
            ...state,
            noteTitle: action.payload
        }
    }
    if (action.type === 'SET_ALL_NOTES') {
        return {
            ...state,
            allSteps: action.payload
        }
    }
    if (action.type === 'NOTE_FOR_STEP_1') {
        return {
            ...state,
            step_1: [...state.step_1, action.payload]
        }
    }
    if (action.type === 'NOTE_FOR_STEP_2') {
        return {
            ...state,
            step_2: [...state.step_2, action.payload]
        }
    }
    if (action.type === 'NOTE_FOR_STEP_3') {
        return {
            ...state,
            step_3: [...state.step_3, action.payload]
        }
    }
    if (action.type === 'NOTE_FOR_STEP_4') {
        return {
            ...state,
            step_4: [...state.step_4, action.payload]
        }
    }
    if (action.type === "VANISHED") {
        return {
            ...state,
            step_1: [],
            step_2: [],
            step_3: [],
            step_4: []
        }
    }
    if (action.type === 'POSITION_CNG') {
        return {
            ...state,
            alterChange: action.payload
        }
    }
    if(action.type==='SEARCH_INPUT'){
        return{
            ...state,
            searchText:action.payload
        }
    }


    return state;
}
export default reducer;