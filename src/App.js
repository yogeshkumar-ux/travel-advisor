import React, {useState,useEffect} from 'react';
import {CssBaseline , Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places, setPlaces] = useState([]);

    const [coordinates, setCoordinates] = useState({lat:0, lng:0});
    const [bounds,setBounds] = useState();
    const [isClicked, setIsClicked] = useState(null);

    useEffect(()=>{
   navigator.geolocation.getCurrentPosition(({coords: {latitude , longitude}}) =>{
    setCoordinates({lat:latitude, lng:longitude})
   })
    },[])

    useEffect(() => {
        getPlacesData(bounds)
  
        .then((data)=> {
            console.log(data);
            setPlaces(data);
        } )

    }, [bounds,coordinates])

    return ( 
    <>
     <CssBaseline />
     <Header/>
     <Grid container spacing ={3} style = {{ width: '100%'}}>
         <Grid item xs = {12} md = {4}>
             <List places = {places}
              isClicked = {isClicked} />
             </Grid> 
             <Grid item xs = {12} md = {8}>
                 <Map 
                  setCoordinates = {setCoordinates}
                  setBounds = {setBounds}
                  places = {places}
                  setIsClicked = {setIsClicked} />
             </Grid> 
     </Grid>

    </> 
    )
}

export default App;