import axios from "axios";


const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"





export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: "sw.lat",
                tr_latitude: "ne.lat",
                bl_longitude: "sw.lng",
                tr_longitude: "ne.lng",
            },
            headers: {
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                'x-rapidapi-key': '0d4f178493msha5c95b83699dda9p1158f7jsna06d30905dd1'
            }
        })
        return data

    }
    catch (err) {
        console.log(err)

    }
}