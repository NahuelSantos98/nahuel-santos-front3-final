import React, {useContext}from 'react'
import { ContextGlobal } from '../Components/context/global.context'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const dentist = state.data.find(dentist => dentist.id === parseInt(id));

  if (!dentist) {
    return <div className={state.theme}>Loading...</div>;
  }

  return (
    <div className={`${state.theme} tableContainer`}>
      <h1>Dentist {dentist.name}</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
