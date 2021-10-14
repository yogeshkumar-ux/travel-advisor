import React, {useState,useEffect} from 'react';
import {CssBaseline , Grid } from '@material-ui/core';
import { getPlacesData } from './api';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


const App = () => {
    const [places, setPlaces] = useState([]);
    const[filteredPlaces, setFilteredPlaces] = useState([])
    const [coords, setCoords] = useState({lat:0, lng:0});
    const [bounds,setBounds] = useState();
    const [isClicked, setIsClicked] = useState(null);
    const[type, setType] = useState('Restaurants');
    const [ rating, setRating] = useState('')

    useEffect(()=>{
   navigator.geolocation.getCurrentPosition(({coords: {latitude , longitude}}) =>{
    setCoords({lat:latitude, lng:longitude})
   })
    },[])

    useEffect(()=> {
       const filteredPlaces = places.filter((place)=> place.rating> rating)

       setFilteredPlaces(filteredPlaces)
    }, [rating])

    useEffect(() => {
        getPlacesData(type,bounds)
  
        .then((data)=> {
            setPlaces(data);
            setFilteredPlaces([])
        } )

    }, [type,bounds,coords])

    return ( 
    <>
     <CssBaseline />
     <Header setCoords={setCoords}/>
     <Grid container spacing ={3} style = {{ width: '100%'}}>
         <Grid item xs = {12} md = {4}>
             <List places = {filteredPlaces.length ? filteredPlaces: places}
              isClicked = {isClicked}
               type ={type}
               setType ={setType}
               rating ={rating} 
               setRating = {setRating}
               />
             </Grid> 
             <Grid item xs = {12} md = {8}>
                 <Map 
                  setCoords = {setCoords}
                  setBounds = {setBounds}
                  places = {filteredPlaces.length ? filteredPlaces: places}
                  setIsClicked = {setIsClicked} 
                 />
             </Grid> 
     </Grid>

    </> 
    )
}

export default App;