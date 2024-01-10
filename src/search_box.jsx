import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./search.css"
import Alert from '@mui/material/Alert';
export default function search_box({updateInfo})
{ 
    let [cname,setCname]=useState("");
    let [err,setErr]=useState(false)
   const  API_url="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY="8fde4609c83d33ce76208ed02b04cce0";
   let getWetherInfo=async ()=>{
    try{
     let response=await fetch(`${API_url}?q=${cname}&appid=${API_KEY}&units=metric`);
     let jsonResponse=await response.json();    
     let result = {
        name:cname,
        feels_alike:jsonResponse.main.feels_like,
        temp:jsonResponse.main.temp,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        weather:jsonResponse.weather[0].description,
     }
     return result;
    }catch(er){
        throw err;
    }
   }
    
    let handleChange=(event)=>{
       setCname(event.target.value);
       
    }
    let handleSubmit=async (event)=>{
        try{
         event.preventDefault();
          
        setCname("");
       let newInfo=await getWetherInfo();
       updateInfo(newInfo);
        }
        catch(err){
            setErr(true);
        }
          
    }
    return (
       
     <div>
        <form  onSubmit={handleSubmit}>
       
        <TextField 
        id="city" 
        label="City Name" 
        variant="outlined" 
        required
        onChange={handleChange}
        value={cname}/><br/>
        <br /><Button variant="contained" type="submit" >Click me</Button>
        {err &&  <Alert severity="error" style={{width:"60%"}}>NO such city found in database!</Alert>}
        </form>
    </div>
       
      
       
    )
}