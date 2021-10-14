import React, {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles'


const Header = ({setCoords}) => {
    const classes = useStyles()

    const [autocomplete,setAutoComplete] = useState(null)

    const onLoad = (autoC)=>  setAutoComplete(autoC)

    const onPlaceChange = ()=> {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({lat, lng})

        
    }

    
    return (
        <AppBar position = "static">
            <Toolbar className = {classes.toolbar}>
                <Typography variant = 'h5' className = {classes.title} >
                    Travel advisor
                </Typography>
                <Box display = "flex">
                    <Typography variant = ' h6' className = {classes.title}>
                       Explore new places 
                    </Typography>
                   <Autocomplete onLoad={onLoad} onPlaceChange={onPlaceChange}> 
                        <div className = {classes.search}>
                            <div className = {classes.searchIcon}>
                                <SearchIcon/>

                            </div>
                            <InputBase placeholder = 'Search..' classes ={{root:classes.inputRoot, input: classes.inputInput }} />
                        </div>
                         </Autocomplete> 


                </Box>
          </Toolbar>
        </AppBar>
    )
}

export default Header;