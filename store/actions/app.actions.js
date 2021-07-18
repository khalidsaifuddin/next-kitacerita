import axios from 'axios/index';

const UPDATE_WINDOW_DIMENSION = '[APP] UPDATE_WINDOW_DIMENSION'

export default function updateWindowDimension()
{
    return (dispatch) => {
        return dispatch ({
            type   : UPDATE_WINDOW_DIMENSION,
            window_dimension: {
                height: window.innerHeight,
                width: window.innerWidth
            }
        })
    }
}

export async function login(params, api_base)
{
    const request = await axios.post(api_base+'/masuk', {
        ...params
    });

    return request

    // return (dispatch) =>
    //     request.then((response) =>
    //         dispatch({
    //             payload: response.data,
    //             params
    //         })
    //     );
}