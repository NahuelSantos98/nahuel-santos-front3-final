import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/context/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state, deleteWholeFavorites } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  const getFromLocalStorage = () => {
    const items = localStorage.getItem('favorites');
    if (items) {
      setFavs(JSON.parse(items));
    }
  };

  useEffect(() => {
    getFromLocalStorage();
  }, [state.favs]);

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      {favs.length > 0 && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => {deleteWholeFavorites(); setFavs([]);}} style={{padding: '1rem', borderRadius: '2rem'}}>
            Delete all
          </button>
        </div>
      )}
        <div className="card-grid">      
          <div className="padding">
        {favs.length > 0 ? (
          favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p style={{ color: 'red' }}>No favorites found</p>
        )}
        </div>
      </div>

    </div>
  );
};

export default Favs;

