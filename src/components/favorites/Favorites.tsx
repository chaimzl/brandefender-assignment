import { useSelector } from "react-redux";

export default()=>
{
    const favorites = useSelector((state: any) => 
    {
     return state.favorites.data
    }
    
    );

    
    return (
        <div>
          {favorites && favorites?.map((d:any) =>d && <li key={d}>{d}</li>)}
        </div>
    )
}