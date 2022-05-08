import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Notifications from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


export default () => {

    const history = useHistory();
    const [value, setValue] = useState('/');
    // const [favoritesCount, setFavoritesCount] = useState(null);

    const favorites = useSelector((state: any) => 
    {
        return state.favorites.data
    });

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        if (!newValue.includes('todo')) {
            history.push(newValue);
        }
    };

    return (
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<Badge color="primary" badgeContent={favorites.length}><FavoriteIcon /></Badge>} />
            <BottomNavigationAction label="todo1" value="todo1" icon={<Notifications />} />
            <BottomNavigationAction label="todo2" value="todo2" icon={<AccountCircle />} />
        </BottomNavigation>
    )
}