const CounterReducer=(state,action)=>
{
    switch(action)
    {
        case 'INCREAMENT':
           return( state+1);   
        default:
            break;
    }

}

export default CounterReducer;