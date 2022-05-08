
import './header.scss';
import LogoArea from './logoArea/LogoArea';
import NavBar from './navBar/NavBar';
import SearchBox from './searchBox/SearchBox';


export default () => {

    return <header className="bras-header d-flex justify-content-between align-items-center ps-1 pe-4 ">
        <LogoArea/>
        <NavBar/>
        <SearchBox/>
     
    </header>

}