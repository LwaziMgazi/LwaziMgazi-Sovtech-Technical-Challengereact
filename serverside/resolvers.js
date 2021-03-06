const  db= require('./db');
const axios= require('axios');

const Query={
   categories: ()=>{ return axios.get('https://api.chucknorris.io/jokes/categories').then(res=>res.data)},
   jokes: (root,cate)=>{ return axios.get(`https://api.chucknorris.io/jokes/random?category=${ cate.cat}`).then(res=>res.data)} 
};


module.exports={Query}