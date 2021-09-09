import { MergeTypeRounded } from "@material-ui/icons";
import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
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