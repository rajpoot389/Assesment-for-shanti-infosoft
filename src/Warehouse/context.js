import React,{createContext,useContext,useReducer} from "react";
import reducer from "./reducer";

const initialState={
    showPopUp:false,
    allSteps:[],
    step_1:[],
    step_2:[],
    step_3:[],
    step_4:[],
    alterChange:[],
    searchText:''
}

const AppContext=createContext();
const AppProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,initialState);
    return <AppContext.Provider value={{...state,dispatch}}>{children}</AppContext.Provider>
}

// Creating custom hook
const useGlobalContext=()=>{
    return useContext(AppContext);
}


export {AppProvider,AppContext,useGlobalContext};