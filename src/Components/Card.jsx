import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./context/global.context";

const Card = ({ dentist }) => {
  const { state, addFavorites, deleteFavorites } = useContext(ContextGlobal);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = state.favs;
    const fav = favs.find(fav => fav.id === dentist.id);
    if (fav) {
      setIsFav(true);
    } else {
      setIsFav(false);
    }
  }, [state.favs, dentist.id]);

  const handleFavoriteClick = () => {
    if (isFav) {
      deleteFavorites(dentist);
    } else {
      addFavorites(dentist);
    }
  };

  return (
    <div className="card jello-horizontal">
      <Link style={{ margin: 0 }} to={`/dentista/${dentist.id}`}>
        <p style={{ color: 'black', textDecoration: 'underline' }}>{dentist.name} - {dentist.username}</p>
      </Link>
      <Link style={{ margin: 0 }} to={`/dentista/${dentist.id}`}>
        <p style={{ margin: 0, color: 'rgb(126, 126, 126)' }}>Details</p>
      </Link>
      <button onClick={handleFavoriteClick} className="favButton">
        {isFav ? 'Delete from favs ❌' : 'Add fav ⭐️'}
      </button>
    </div>
  );
};

export default Card;
