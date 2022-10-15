 import React from 'react';
 import {useState} from 'react';
 import {useEffect} from 'react';
 import { useParams } from "react-router-dom";
import { apiGet } from '../misc/config';

 const Show = () => {
    const {id} = useParams();

    const [show, setshow] = useState(null);
    const [isLoading, setIsLoading]=useState(true);
    const [error, setError] = useState(null);

    let isMounted = true;
    useEffect( ()=>{
         apiGet(`/shows/${id}?embell[]=seasons&embed[]=cast`).then(results=>{
            if(isMounted){ 
            setshow(results);
            setIsLoading(false)
            }
         }).catch(err =>{
          if(isMounted){ 
            setError(err.message);
            setIsLoading(false);
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
   