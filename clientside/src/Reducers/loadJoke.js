import { useEffect } from 'react';
import {loadJokes} from '../Graphqlservices/requests';
const endpointBaseURL='http://localhost:5000/graphql';



const loadJoke=  (state='',action)=>
{
    switch (action.type) {
        case 'LOADJOKE':
                  return state=action.data;
                                      
            break;
    
        default:
           return  state;
    }
}
export default loadJoke;