import React, {useState, useEffect, useRef} from 'react';
import {CircularProgress,Typography, FormControl, InputLabel, Grid, MenuItem, Select } from '@material-ui/core'

import useStyle from './Styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails'

const List = ({places, isClicked,type, setType,rating, setRating}) => {
    const classes = useStyle();
   
    

  console.log({isClicked});
    return (
        <div className = {classes.container} >
            <Typography variant = "h4"> Restaurants, Hotels and attractions around you </Typography>
            <FormControl className = {classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value = {type} onChange = {(e) =>setType(e.target.value) }>
                <MenuItem value = "Restaurants"> Restaurants</MenuItem>
                <MenuItem value ="Hotels"> Hotels</MenuItem>
                <MenuItem value = "attractions">Attractions </MenuItem>
                 </Select>
                 </FormControl>

                 <FormControl className = {classes.formControl}>
                     <InputLabel>Rating</InputLabel>
                <Select value = {rating} onChange = {(e)=>setRating(e.target.value)}>
                <MenuItem value = {0}> All</MenuItem>
                <MenuItem value = {3}> Above 3.0</MenuItem>
                <MenuItem value = {4}> Above4.0 </MenuItem>
                <MenuItem value = {4.5}>Above 4.5  </MenuItem>
                </Select>
                
            </FormControl>
            <Grid  container spacing = {3} className = {classes.list}>
                   { places?.map((place,i) => (
                       <Grid item key = {i} xs={12}>
                           <PlaceDetails place = {place} />
                       </Grid>

                    ))}
                </Grid>


        </div>
    )
}

export default List;