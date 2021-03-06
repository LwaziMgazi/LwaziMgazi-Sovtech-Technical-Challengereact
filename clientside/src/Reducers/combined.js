import loadCate from './loadCat';
import loadJoke from './loadJoke';
import {combineReducers} from 'redux';
import loadCategories from './loadCat';

const allReducers= combineReducers({
    category:loadCategories,
    joke: loadJoke
});

console.log(loadJoke)
export default allReducers;