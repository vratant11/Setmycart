import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import AdbIcon from "@mui/icons-material/Adb";

import Typography from '@mui/material/Typography';
import "./card.css";

export default function MediaCard() {
  return (
    <div className='cards'>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent sx={{display: 'flex' , justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Card1
        </Typography>
        <AdbIcon className="icon" />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex' , justifyContent: 'center',alignItems: 'center'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent sx={{display: 'flex' , justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
         Card2
        </Typography>
        <AdbIcon className="icon" />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex' , justifyContent: 'center',alignItems: 'center'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent sx={{display: 'flex' , justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Card3
        </Typography>
        <AdbIcon className="icon" />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex' , justifyContent: 'center',alignItems: 'center'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent sx={{display: 'flex' , justifyContent: 'center',flexDirection: 'column',alignItems: 'center'}}>
        <Typography gutterBottom variant="h5" component="div">
          Card4
        </Typography>
        <AdbIcon className="icon" />
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{display: 'flex' , justifyContent: 'center',alignItems: 'center'}}>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
    
  );
}
