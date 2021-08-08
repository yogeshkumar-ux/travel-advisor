import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography , useMediaQuery  } from '@material-ui/core';
import useStyles from './styles';
import Rating from '@material-ui/lab';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'


const Map = () => {

    const classes = useStyles();
    const coordinates = { lat: 0 , lng: 0};

    const isMobile = useMediaQuery('(min-width:600px)');


    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
            onChange = {''}
            onClick = {''}
            center = {coordinates}
            defaultCenter = {coordinates}
            defaultZoom = {14}
            bootstrapURLKeys = {{key : 'AIzaSyC6XlV6nOPEUklOb9mTxIyiDOWdnJhIA9Y'}}
            margin = {[50 ,50, 50, 50]}>

        

            </GoogleMapReact>
        </div>

        
    )
}

export default Map;