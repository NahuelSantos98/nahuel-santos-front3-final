import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/context/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state, deleteWholeFavorites, getFromLocalStorage, dispatch } = useContext(ContextGlobal);

  useEffect(() => {
    const favorites = getFromLocalStorage();
    dispatch({ type: 'ADD_FAVS', payload: favorites });
  }, []);

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      {state.favs.length > 0 && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={deleteWholeFavorites} style={{padding: '1rem', borderRadius: '2rem'}}>
            Delete all
          </button>
        </div>
      )}
        <div className="card-grid">      
        {state.favs.length > 0 ? (
          state.favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p style={{ color: 'red' }}>No favorites found</p>
        )}
        </div>
    </div>
  );
};

export default Favs;