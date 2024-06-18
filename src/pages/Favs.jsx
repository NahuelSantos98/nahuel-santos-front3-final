import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/context/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  const getFromLocalStorage = () => {
    const items = localStorage.getItem('favorites');
    if (items) {
      setFavs(JSON.parse(items));
    }
  };

  useEffect(() => {
    getFromLocalStorage();
  }, [favs]);

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length > 0 ? (
          favs.map(dentist => (
            <Card key={dentist.id} dentist={dentist} />
          ))
        ) : (
          <p style={{color: 'red'}}>No favorites found</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
