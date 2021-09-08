import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper, Typography , useMediaQuery  } from '@material-ui/core';
import useStyles from './styles';
import Rating from '@material-ui/lab';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'


const Map = ({setCoordinates, setBounds, }) => {

    const classes = useStyles();

    const isMobile = useMediaQuery('(min-width:600px)');

    const coordinates = { lat:0, lng: 0};



    return (
        <div className = {classes.mapContainer}>
            <GoogleMapReact
             bootstrapURLKeys = {{key : 'AIzaSyAVf3PJJGww7Pu5RrohtvxT3EsScmNwPqQ' }}
             defaultCenter = {coordinates}
             center = {coordinates}
             defaultZoom = {14}
            margin = {[50 ,50, 50, 50]}
            onChildClick = {''}
            onChange = {(e) => {
                setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
                setCoordinates({ lat: e.center.lat, lng: e.center.lng})
            }}>
           

        

            </GoogleMapReact>
        </div>

        
    )
}

export default Map;