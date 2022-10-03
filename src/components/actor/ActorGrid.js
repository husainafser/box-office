import React from 'react'

import IMAGE_NOT_FOUND from '../../images/images.jpg'
import ActorCard from './ActorCard';

const ActorGrid = ({data}) => {
  return ( 
  <div>
      {
      data.map(({person})=>( 
        <ActorCard 
        key={person.id} 
        name={person.name} 
        country={person.country ? person.country.name : null}
        birthday={person.birthday}
        deathday={person.birthday}
        gender={person.gender}
        image={person.image ? person.image.medium : IMAGE_NOT_FOUND}     
        />
        ))}
    </div>
);
};


export default ActorGrid
