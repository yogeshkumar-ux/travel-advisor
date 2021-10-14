import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography , useMediaQuery  } from '@material-ui/core';
import useStyles from './styles';
import Rating from '@material-ui/lab/Rating';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'

const Map = ({setCoords, setBounds,places,setIsClicked, }) => {

    const classes = useStyles();

    const isDesktop = useMediaQuery('(min-width:600px)');

    const coords = { lat:0, lng:0}



    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys = {{key : process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
             defaultCenter = {coords}
             center = {coords}
             defaultZoom = {14}
            margin = {[50 ,50, 50, 50]}
            onChildClick = {(Child)=> setIsClicked(Child)}
            onChange = {(e) => {
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                setCoords({ lat: e.center.lat, lng: e.center.lng})
            }}
            
            
>
           
           {places?.map((place, i)=> (
               <div
                className = {classes.markerContainer}
                    lat = {Number(place.latitude)}
                    lng = {Number(place.longitude)}
                    key = {i}>
            
                   { !isDesktop ? (
                      <LocationOnOutlinedIcon color = 'primary' fontSize = 'large'/>  
                      ) : (
                          <Paper elevation = {3} className = {classes.paper}>
                              <Typography  className = {classes.typography} variant= 'subtitle2' gutterBottom> {place.name}</Typography>
                               <img className = {classes.pointer} src = {place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} />
                               <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
                               </Paper>
                         
                      )                    
                    }
                   </div>
           ))}
        

            </GoogleMapReact>
        </div>

        
    )
}

export default Map;