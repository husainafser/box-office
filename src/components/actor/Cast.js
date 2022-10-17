import React from 'react'
import IMAGE_NOT_FOUND from "../../images/images.jpg";
import { CastList } from '../show/Cast.styled';

const Cast = ({cast}) => {
  return (
    <CastList>
       {cast.map(({person, character, voice}, key)=>( 
         <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img 
             src={person.image ? person.image.medium : IMAGE_NOT_FOUND}
             alt="cast-person"
             />
          </div>
          <div className="actor">
            <span className="bold">
              {person.name} 
            </span>
            <span>
            | {character.name} {voice ? '| voice' : ''}
            </span>
          </div>
         </div>
       ))}
    </CastList>
  )
}

export default Cast
