import Search from './search_box';
import Infobox from './infobox'
import "./wheatherApp.css"
import { useState } from 'react';
export default function wheatherApp(){
    let [wheatherInfo,setWeatherInfo]=useState({
        name:"wonder city",
        feels_alike:24,
        temp:24,
        temp_max:25,
        temp_min:25,
        humidity:23,
        weather:"warm",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div className="wdiv">
            <h1>Wheather App</h1>
            <Search updateInfo={updateInfo}/><br />
            <Infobox info={wheatherInfo}></Infobox>
        </div>
    )
}