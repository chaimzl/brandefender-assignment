import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import homeService from './homeService';
import MarketChart from '../marketChart/MarketChart';
import { DcRate } from '../marketChart/marketChart.types';


export default () => {

    const [selectedDay, setSelectedDay] = useState<Date | null>(
        new Date(),
    );

    const [fetchedRates, setfetchedRates] = useState<DcRate[]>(
       []
    );

    const handleChange = (newValue: Date | null) => {
        setSelectedDay(newValue);
    };
    useEffect(()=>{
        homeService.getDaelyRates().then(data=> setfetchedRates(data.rates) );
    },[selectedDay])

    return (
        <>
         <div className='row'>
            <div className='col-10 xs-col-2'>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    className=''
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={selectedDay}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            </div>
           
            </div>
            <div className='row pt-3'>
            <div className='col-12'>

           {fetchedRates.length && <MarketChart  rates={fetchedRates}/>}
            </div>
            </div>
         
        </>
       
       

    )

}