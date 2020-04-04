import {
    REGISTER_USER,
    SET_LOADING,
    SET_MSG
} from '../actiontype'
import axiosInstance from '../../../axios/instance'

export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export const setMsg = (value) => {
    console.log(value, ']=[][]=[]]=[[=[]][=]=[')
    return {
        type: SET_MSG,
        payload: value
    }
}

export const registerUser = (payload) => {
    return async function (dispatch) {
        dispatch(setLoading(true))
        try {
            const {data} = await axiosInstance({
                url: 'users/register',
                method: 'post',
                data: {
                    username: payload.username,
                    email: payload.email,
                    password: payload.password
                }
            })
            dispatch(setMsg(data.msg))
            // console.log(data.msg)
        } catch(error) {
            console.log(error)
        }
        dispatch(setLoading(false))
    }
}