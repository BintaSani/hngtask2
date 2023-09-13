import { createContext } from 'react';
import { MovieArray } from '../utils/utils';




const MovieContext = createContext(MovieArray);

export default MovieContext;