import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const initialState = { theme: '', data: [], favs: [] };

function reducer(state, action) {
  switch(action.type) {
    case 'DARK_MODE':
      return { ...state, theme: 'dark' };
    case 'LIGHT_MODE':
      return { ...state, theme: '' };
    case 'GET_DENTIST':
      return { ...state, data: action.payload };
    case 'ADD_FAVS':
      return { ...state, favs: action.payload };
    case 'DELETE_FAV':
      return { ...state, favs: action.payload };
    case 'CLEAN_FAV':
      return { ...state, favs: [] };
    default:
      throw new Error();
  }
}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  
  const url = 'https://jsonplaceholder.typicode.com/users';
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios(url)
      .then(res => dispatch({ type: 'GET_DENTIST', payload: res.data }))
      .catch(err => console.error(err));

  }, []);

  const changeTheme = () => {
    if (state.theme === 'dark') {
      dispatch({ type: 'LIGHT_MODE' });
    } else {
      dispatch({ type: 'DARK_MODE' });
    }
  };

  const getFromLocalStorage = () => {
    const storedFavs = localStorage.getItem('favorites');
    if (storedFavs) {
      return JSON.parse(storedFavs);
    }else {
      return [];
    }
  };

  const addFavorites = (item) => {
    const updatedFavs = [...state.favs, item];
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    dispatch({ type: 'ADD_FAVS', payload: updatedFavs });
  };

  const deleteFavorites = (item) => {
    const updatedFavs = state.favs.filter(fav => fav.id !== item.id);
    localStorage.setItem('favorites', JSON.stringify(updatedFavs));
    dispatch({ type: 'DELETE_FAV', payload: updatedFavs });
  }; 

  const deleteWholeFavorites = () => {
    localStorage.removeItem('favorites');
    dispatch({ type: 'CLEAN_FAV'});
  };

  return (
    <ContextGlobal.Provider value={{ state, dispatch, changeTheme, addFavorites, deleteFavorites, deleteWholeFavorites, getFromLocalStorage }}>
      {children}
    </ContextGlobal.Provider>
  );
};