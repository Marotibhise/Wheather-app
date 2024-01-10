import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"
export default function infobox({info}) {
    const URL="https://images.unsplash.com/photo-1509409347569-27f88c82131c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGR1c3R5JTIwd2hlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   
    return(
      <div className="div1">
        <Card sx={{ maxWidth: 345 }}>
         
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {info.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <div>Temprature:{info.temp}&deg;C</div>
            <div>Humidity:{info.humidity}</div>
            <div>Min temp:{info.temp_min}&deg;C</div>
            <div>Max temp:{info.temp_max}&deg;C</div>
            <div>Wheather can be described as <i>{info.weather}</i> and    feels like {info.feels_alike}&deg;c</div>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      </div>
    )
}