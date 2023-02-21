import axios from "axios";
import { 
    GET_BLOG_LIST_FAIL, 
    GET_BLOG_LIST_SUCCESS
} from "./types";

export const get_blog_list = () => async dispatch =>{
    const config = {
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/blog/`, config);

        if (res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }
    }catch{
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
}

export const get_blog_list_page = (p) => async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json' 
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/blog/?page=${p}`, config);

        if (res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }
    }catch{
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
}

export const get_blog = (slug) => async dispatch =>{
    const config = {
        headers: {
            'Accept': 'application/json' 
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/v1/blog/${slug}/`, config);

        if (res.status === 200){
            dispatch({
                type: GET_BLOG_LIST_SUCCESS,
                payload: res.data
            });
        }else{
            dispatch({
                type: GET_BLOG_LIST_FAIL
            })
        }
    }catch{
        dispatch({
            type: GET_BLOG_LIST_FAIL
        })
    }
}