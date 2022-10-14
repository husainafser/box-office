 import React, { useEffect, useState } from 'react';
 import { useParams } from "react-router-dom";
import { apiGet } from '../misc/config';
 const show = () => {
    const {id} = useParams();

    const [show, setshow] = useState(null);

    useEffect( ()=>{
         apiGet(`/shows/${id}?embell[]=seasons&embed[]=cast`).then(results=>{
            setshow(results);
         })
    }, [id])
    console.log('show',show); 
   return (
     <div>
       this show page
     </div>
   )
 }
 
 export default show
 