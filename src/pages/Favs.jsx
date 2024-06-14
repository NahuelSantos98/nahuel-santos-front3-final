import React, {useContext} from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/context/global.context";



const Favs = () => {

  const {state} = useContext(ContextGlobal)

  return (
    <div className={state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </div>
  );
};

export default Favs;
