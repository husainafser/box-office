import React from 'react'
import ShowCard from './ShowCard'
import { useShows } from "../../misc/custom-hooks";
 import IMAGE_NOT_FOUND from '../../images/images.jpg'
import { FLexGrid } from '../styled';

const ShowGrid = ({data}) => {

  const [starredShows, dispatchStarred ] = useShows();

  return ( 
  <FLexGrid>
      {
      data.map(({show})=>{  
        
        const isStarred=starredShows.includes(show.id);
        const onStarClick=() =>{
           if(isStarred){
              dispatchStarred({ type: 'REMOVE', showId: show.id});
           }
           else{
            dispatchStarred({ type: 'ADD', showId: show.id});
           }
        }
        return (
          <ShowCard 
        key={show.id} 
        id={show.id} 
        name={show.name} 
        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}     
        summary={show.summary}
        onStarClick={onStarClick}
        isStarred={isStarred}
        />
        );
      })}
    </FLexGrid >
);
};

export default ShowGrid;
