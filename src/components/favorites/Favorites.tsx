import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default()=>
{
    const favorites = useSelector((state: any) => 
    {
     return state.favorites.data
    }
    
    );

    
    return (
        <div>
          {favorites && favorites?.map((d:any) =>d && <li key={d}>
            <Link key={d} to={`/?day=${d}`} >{d}</Link>
            </li>)}
        </div>
    )
}