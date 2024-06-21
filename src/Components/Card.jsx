import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./context/global.context";

const Card = ({ dentist }) => {
  const { state, addFavorites, deleteFavorites} = useContext(ContextGlobal);


  const fav = state.favs.find(fav => fav.id === dentist.id);

  const handleFavoriteClick = () => {
    if (fav) {
      deleteFavorites(dentist);
    } else {
      addFavorites(dentist);
    }
  };

  return (
    <div className="card jello-horizontal">
      <Link style={{ margin: 0 }} to={`/dentista/${dentist.id}`}>
        <p style={{ color: 'black', textDecoration: 'underline' }}>{dentist.name} - {dentist.username}</p>
        <p style={{ margin: 0, color: 'rgb(126, 126, 126)' }}>Details</p>
      </Link>
      <button onClick={handleFavoriteClick} className="favButton">
        {fav ? 'Delete from favs ❌' : 'Add fav ⭐️'}
      </button>
    </div>
  );
};

export default Card;