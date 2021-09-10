import axios from "axios";


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


export const getPlacesData = async (bounds) => {
    try {
        const { data:  { data } } = await axios.get(URL, {params: {
          bl_latitude: bounds.sw.lat,
          tr_latitude: bounds.ne.lat,
          bl_longitude: bounds.sw.lng,
          tr_longitude: bounds.ne.lng
         
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': '7e56cb9aa7msh21e3466a42b5b26p10138djsn2e3b7bc67ece'
        }
        } )
      
        return data;
    } catch (error) {

    }
}