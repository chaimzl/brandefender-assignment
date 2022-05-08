import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import homeService from './homeService';
import MarketChart from '../marketChart/MarketChart';
import { DcRate } from '../marketChart/marketChart.types';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { favoritesSlice } from '../../slices/favorites.slice';
import { useDispatch, useSelector } from 'react-redux';
import { Skeleton } from 'primereact/skeleton';
import { useParams } from "react-router-dom";
import './home.scss';


export default () => {
    const dispatch = useDispatch();
    const [selectedDay, setSelectedDay] = useState<Date>(new Date());
    const [isFaborit, setIsFavorit] = useState<boolean>(false);
    const [fetchedRates, setfetchedRates] = useState<DcRate[]>([]);
    const favorites = useSelector((state: any) => {
        return state.favorites.data
    });
   


    const handleChange = (newValue: Date | null) => {
        if (newValue) {
            setSelectedDay(newValue);
        }
    };

    useEffect(() => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let dayParam = params.get('day');
        if(dayParam){
            let day=new Date(dayParam);
            setSelectedDay(day);
        }
    }, [])

    useEffect(() => {
        setfetchedRates([]);
        homeService.getDaelyRates(selectedDay).then(data => setfetchedRates(data.rates.filter(x => x.currency == 'ILS')));
        setIsFavorit(favorites?.indexOf(selectedDay.toDateString()) > -1)
    }, [selectedDay])

    const handleClick = (newValue: any) => {

        setIsFavorit(newValue.target.checked);
        if (newValue.target.checked) {
            dispatch(favoritesSlice.actions.addFavorit(selectedDay.toDateString()));
        }
        else {
            dispatch(favoritesSlice.actions.deleteFavorit(selectedDay.toDateString()));
        }

    }



    return (
        <>
            <div className='row justify-content-between'>
                <div className='col-10 col-sm-3'>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Select a day"
                            inputFormat="MM/dd/yyyy"
                            value={selectedDay}
                            onChange={handleChange}
                            renderInput={(params) => <TextField size="small" {...params} />}
                        />
                    </LocalizationProvider>

                </div>
                <div className='col-1 align-self-center text-end'>
                    <Checkbox checked={isFaborit} onChange={handleClick} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </div>

            </div>
            <div className='row pt-3'>
                <div className='col-12'>
                    <div className='w-100 p-2 rounded gray-bg mb-2'>fwefwf</div>
                    {fetchedRates.length > 0 && <MarketChart rates={fetchedRates} />}
                    <Skeleton width="100%" height="150"></Skeleton>
                </div>
            </div>

        </>



    )

}


