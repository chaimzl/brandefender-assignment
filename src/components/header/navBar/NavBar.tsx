import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link, useHistory } from 'react-router-dom';


export default () => {

    const history = useHistory();
    const [value, setValue] = useState('/');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        if(!newValue.includes('todo'))
        {
            history.push(newValue);
        }
    };

    return (
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
            <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="todo1" value="todo1" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="todo2" value="todo2" icon={<FolderIcon />} />
        </BottomNavigation>
    )
}