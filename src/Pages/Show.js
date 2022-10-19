import { useParams } from "react-router-dom";
import Cast from '../components/actor/Cast';
import Details from '../components/actor/Details';
import Seasons from '../components/actor/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { useShow } from "../misc/custom-hooks";
import { InfoBlock, ShowPageWrapper } from './show.styled';


 const Show = () => {
    const {id} = useParams();
     
    const{show, isLoading, error }=useShow(id);

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
   