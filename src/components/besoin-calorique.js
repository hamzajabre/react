
import React, { useState } from 'react';

const CoefActivite = {
  1: 1,
  2: 1.2,
  3: 1.4,
  4: 1.6,
  5: 1.7,
  6: 1.9,
  7: 2
};

export default function BesoinsCaloriques() {
  const [genre, setGenre] = useState('Homme');
  const [poids, setPoids] = useState(0);
  const [taille, setTaille] = useState(0);
  const [age, setAge] = useState(0);
  const [activite, setActivite] = useState(1);
  const [besoinsCaloriques, setBesoinsCaloriques] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    let coefActivite = CoefActivite[activite];
   
    if (genre === 'Homme') {
      besoinsCaloriques = (66.5 + (13.75 * poids) + (5 * taille) - (6.77 * age)) * coefActivite;
    } else {
      besoinsCaloriques = (655.1 + (9.56 * poids) + (1.85 * taille) - (4.67 * age)) * coefActivite;
    }
    setBesoinsCaloriques(besoinsCaloriques);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Genre :
            <select value={genre} onChange={(event) => setGenre(event.target.value)}>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Poids (en kg) :
            <input type="number" value={poids} onChange={(event) => setPoids(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Taille (en cm) :
            <input type="number" value={taille} onChange={(event) => setTaille(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Age :
            <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Niveau d'activité physique :
            <select value={activite} onChange={(event) => setActivite(event.target.value)}>
              <option value="1">Journée passée au repos allongé</option>
              <option value="2">Travail sédentaire assis, pas de sport</option>
              <option value="3">Travail sédentaire avec 30 min de marche</option>
              <option value="4">Travail sédentaire et 1h de sport</option>
              <option value="5">Travail sédentaire et 1h30 à 2h de sport</option>
              <option value="6">Travail physique avec beaucoup de déplacement et 1h30 de sport</option>
              <option value="7">Travail physique et 3h à 4h de sport</option>
            </select>
          </label>
        </div>
        <button onClick={besoinsCaloriques}>calculate</button>
    </form>
    
    
    </>
  )
    

}

