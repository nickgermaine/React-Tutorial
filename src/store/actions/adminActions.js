import API from '../../utils/api';

export const getUsers = (token) => {
    return dispatch => {
        API.getUsers(token, res => {
            dispatch({
                type: 'GOT_USERS',
                payload: res.data
            })
        })
    }
}

export const getPosts = (token) => {
    return dispatch => {
        API.getPosts(token, res => {
            dispatch({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}

export const addPost = (post, token) => {
    return dispatch => {
        API.addPost(post, token, res => {
            dispatch({
                type: 'POST_ADDED',
                payload: res.data
            })
        })
    }
}

export const updatePost = (post, token) => {
    return dispatch => {
        API.updatePost(post, token, res => {
            dispatch({
                type: 'UPDATED_POST',
                payload: res.data
            })
        })
    }
}

export const uploadImage = (data, token, postId, userId) => {
    return dispatch => {
        API.uploadImage(data, token, postId, userId, res => {
            dispatch({
                type: 'UPLOADED_IMAGE',
                payload: res.data
            })
        })
    }
}

export const getSinglePost = (id, token) => {
    return dispatch => {
        API.getSinglePost(id, token, res => {
            dispatch({
                type: 'GOT_SINGLE_POST',
                payload: res.data
            })
        })
    }
}