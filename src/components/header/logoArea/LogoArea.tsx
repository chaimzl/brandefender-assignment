import { Link } from "react-router-dom"
import './logoArea.scss'

export default ()=>{
    return(
        <Link to="/" className="d-sm-flex d-none bras-logo" title="DC Investing">
            <img height={80} src="/assets/logo.png"></img>
            <span className=" ms-1 align-self-center ">DC Investing</span>
        </Link>
    )

}