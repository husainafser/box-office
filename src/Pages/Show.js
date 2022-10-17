 import React, { useReducer } from 'react';
 import {useEffect} from 'react';
 import { useParams } from "react-router-dom";
import Cast from '../components/actor/Cast';
import Details from '../components/actor/Details';
import Seasons from '../components/actor/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';
import { InfoBlock, ShowPageWrapper } from './show.styled';
const reducer = (prevState, action)=>{
  switch (action.type) {
    case 'FETCH_SUCCESS':{
      return {isLoading:false, error:null, show:action.show};
    }
      
    case 'FETCH_FAILED':{
      return {...prevState, isLoading:false, error:action.error};
    }
      default: return prevState
  }
};
const initialState={
  show:null,
  isLoading:true,
  error:null,
};

 const Show = () => {
    const {id} = useParams();
    const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState);

    useEffect( ()=>{
      let isMounted = true;
         apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
            if(isMounted){ 
              dispatch({type: 'FETCH_SUCCESS', show: results});
            }
         }).catch(err =>{
          if(isMounted){ 
            dispatch({type: 'FETCH_FAILED', error: err.message});
          }
         });
         return()=>{
          isMounted=false;
         };
    }, [id]);
    if (isLoading) {
        return (
            <div>
              Data is being loading
            </div>
          )
    }
    if (error) {
        return (
            <div>
              Error occured: {error}
            </div>
          )
    }
   return (
     <ShowPageWrapper>
       <ShowMainData 
       image={show.image}
       name={show.name}
       rating={show.rating}
       summary={show.summary}
       tags={show.genres}  />
       <InfoBlock>
        <h2>
          Details
        </h2>
        <Details status={show.status} network={show.network} premeried={show.premeried} />
       </InfoBlock>
       <InfoBlock>
        <h2>
          Seasons
        </h2>
        <Seasons seasons={show._embedded.seasons} />
       </InfoBlock>
       <InfoBlock>
        <h2>
          Cast
        </h2>
        <Cast cast={show._embedded.cast} />
       </InfoBlock>
     </ShowPageWrapper>
    
   )
 }
 
 export default Show
   