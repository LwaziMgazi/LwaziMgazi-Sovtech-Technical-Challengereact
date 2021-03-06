const loadCategories=(state=[],action)=>
{
    switch (action.type) {
        case 'LOADCAT':
                return{
                    array:['lwazi','Malusi']
                }
        
        default:
                return state;
    }
}

export default loadCategories;