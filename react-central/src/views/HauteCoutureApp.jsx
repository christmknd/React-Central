import React, { useState, useEffect } from 'react';
import MaisonList from '../components/hauteCouture/MaisonList';

// import * as api from '../data/api';


export default function HauteCouture () {

    // const [maisons, setMaisons] = useState([]);

    // useEffect(() => {
    //   api.fetchMaisons().then((data) => setMaisons(data));
    // }, []);
  
    return (
      <div>
        <h1>Haute Couture API</h1>
        {/* <MaisonList maisons={maisons} /> */}
      </div>
    );
}