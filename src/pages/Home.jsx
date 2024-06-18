import React, { useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/context/global.context';

const Home = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={state.theme}>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.data.map(item => (
            <Card  key={item.id} dentist={item} />
        ))}
      </div>
    </main>
  );
};

export default Home;
