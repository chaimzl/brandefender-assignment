
import './header.scss';
import LogoArea from './logoArea/LogoArea';
import NavBar from './navBar/NavBar';
import SearchBox from './searchBox/SearchBox';


export default () => {

    return <header className="bras-header d-flex justify-content-between align-items-center px-4 py-2">
        <LogoArea/>
        <NavBar/>
        <SearchBox/>
     
    </header>

}