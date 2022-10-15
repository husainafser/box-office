 import React, { useReducer } from 'react';
 import {useEffect} from 'react';
 import { useParams } from "react-router-dom";
import { apiGet } from '../misc/config';
const reducer = (prevState, action)=>{
  switch (action.type) {
    case'FETCH_SUCCESS':{
      return {isLoading:false, error:null, show:action.show}
    }
      
    case'FETCH_FAILED':{
      return {...prevState, isLoading:false, error:action.error}
    }
      default: return prevState
  }
}
const initialState={
  show:null,
  isLoading:true,
  error:null
}

 const Show = () => {
    const {id} = useParams();
    const [{show, isLoading, error}, dispatch] = useReducer(reducer, initialState);

    let isMounted = true;
    useEffect( ()=>{
         apiGet(`/shows/${id}?embell[]=seasons&embed[]=cast`).then(results=>{
            if(isMounted){ 
              dispatch({type: 'FETCH_SUCCESS', show: results})
            }
         }).catch(err =>{
          if(isMounted){ 
            dispatch({type: 'FETCH_FAILED', error: err.message})
          }
         });
         return()=>{
          isMounted=false;
         }
    }, [id])
    console.log('show',show); 
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
     <div>
       this show page
     </div>
   )
 }
 
 export default Show
   