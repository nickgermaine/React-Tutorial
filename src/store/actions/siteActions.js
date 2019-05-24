import API from '../../utils/api';

export const getPosts = (skip) => {
    return dispatch => {
        API.getSitePosts(skip, res => {
            dispatch({
                type: 'GOT_SITE_POSTS',
                payload: res.data,
                skip: skip
            })
        })
    }
}

export const getPostCount = () => {
    return dispatch => {
        API.getPostCount(res => {
            dispatch({
                type: 'GOT_POST_COUNT',
                payload: res.data.count
            });
        })
    }
}

export const postComment = (comment, token) => {
    return dispatch => {
        API.postComment(comment, token, res => {
            if(res.status === 200){
                API.getCommentById(res.data.id, token, res2 => {
                    dispatch({
                        type: 'ADDED_COMMENT',
                        payload: res2.data
                    })
                })
                
            }
        })
    }
}

export const getPostBySlug = (slug, token) => {
    return dispatch => {
        API.getPostBySlug(slug, token, res => {
            dispatch({
                type: 'SET_FULL_POST_DATA',
                payload: res.data
            })
        })
    }
}

export const setPostData = (post) => {
    return dispatch => {
        dispatch({
            type: 'SET_DEFAULT_POST_DATA',
            payload: post
        });
    }
}