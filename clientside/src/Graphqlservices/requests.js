const endpointBaseURL='http://localhost:5000/graphql';

export async function loadData()
{
 const  response= await fetch(endpointBaseURL,{
        method: 'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
            query:` {
                categories
               }              
            `
        })
    });

    const responseBody=await response.json();

    return responseBody.data.categories;
}


export async function loadJokes(cate)
{
 const  response= await fetch(endpointBaseURL,{
        method: 'POST',
        headers:{'content-type':'application/json'},
        body: JSON.stringify({
            query:` 
            query JokesQuery($cate: String){
                 jokes(cat:$cate){
                   value
                 }
               }                 
            `,
            variables:{cate}
        })
    });

    const responseBody=await response.json();

    return responseBody.data.jokes.value;
}