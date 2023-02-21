import axios from "axios";
import { 
    GET_CATEGORIES_FAIL, 
    GET_CATEGORIES_SUCCESS, 
} from "./types";

export const get_categories = () => async dispath => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    try{
        const res = await axios.get(`${process.env.REAT_APP_API_URL}/api/v1/category/`, config)

        if (res.status === 200 ){
            dispath({
                type: GET_CATEGORIES_SUCCESS,
                payload: res.data
            })
        }else{
            dispath({
                type: GET_CATEGORIES_FAIL
            })
        }

    } catch (err) {
        dispath({
            type: GET_CATEGORIES_FAIL
        })
    }
}