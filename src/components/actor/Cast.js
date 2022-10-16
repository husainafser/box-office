import React from 'react'
import IMAGE_NOT_FOUND from "../../images/images.jpg";

const Cast = ({cast}) => {
  return (
    <div>
       {cast.map(({person, character, voice}, key)=>( 
         <div key={key}>
          <div>
            <img 
             src={person.image ? person.image.medium : IMAGE_NOT_FOUND}
             alt="cast-person"
             />
          </div>
          <div>
            <span>
              {person.name} | {character.name} {voice ? '| voice' : ''}
            </span>
          </div>
         </div>
       ))}
    </div>
  )
}

export default Cast
