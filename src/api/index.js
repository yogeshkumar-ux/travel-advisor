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
          'x-rapidapi-key': '57a95062eamsh61edea2b50945f9p18658cjsn42b8d6b7a0ec'
        }
        } )
      
        return data;
    } catch (error) {

    }
}