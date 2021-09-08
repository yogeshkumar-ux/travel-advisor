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
          'x-rapidapi-key': 'bbe6ad779amsh2a962427cc11f53p101acfjsne36c84381a0c'
        }
        } )
      
        return data;
    } catch (error) {

    }
}