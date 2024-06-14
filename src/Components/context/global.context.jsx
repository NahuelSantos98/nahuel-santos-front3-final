import { createContext, useReducer } from "react";

export const initialState = {theme: '', data: []}

function reducer (state, action){
  switch(action.type){
    case 'DARK_MODE':
      return {...state.data, theme: 'dark'}
    case 'LIGHT_MODE':
      return {...state.data, theme: ''}
    case 'GET_DENTIST':
      return null
    case '':
      return '' 
    default: 
      throw new Error()
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState)
    
  const changeTheme = ()=>{
    dispatch({type: 'DARK_MODE'})
    if(state.theme === 'dark'){
      dispatch({type: 'LIGHT_MODE'})
    }
  }





  
  return (
    <ContextGlobal.Provider value={{state, dispatch, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
