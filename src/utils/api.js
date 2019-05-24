import axios from 'axios';

let host;
if(process.env.NODE_ENV === 'development'){
    host = 'http://localhost:8080';
}else{
    host = 'http://demoapi.nickgermaine.com';
}


const API = {
    makeFileURL: (url, token) => {
        return host + url + "?access_token=" + token;
    },
    login: (email, pass, success) => {
        axios.post(`${host}/api/users/login`, {email: email, password: pass})
        .then(res => {
            success(res);
        });
    },
    getUser: (userId, token, success) => {
        console.log("userId", userId);
        axios.get(`${host}/api/users/${userId}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },
    register: (name, email, pass, success) => {
        axios.post(`${host}/api/users`, {name: name, email: email, password: pass})
        .then(res => {
            success(res);
        })
        .catch(err => {
            success(err);
        })
    },
    getUsers: (token, success) => {
        axios.get(`${host}/api/users?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getPostCount: (success) => {
        axios.get(`${host}/api/Posts/count`)
        .then(res => {
            success(res);
        })
    },
    getPosts: (token, success) => {
        axios.get(`${host}/api/Posts?access_token=${token}`)
        .then(res => {
            success(res);
        })
    },
    getSitePosts: (skip, success) => {
        axios.get(`${host}/api/Posts`, {
            params: {
                filter: {
                    skip: skip,
                    limit: 5,
                    include: 'PostImage',
                    fields: {
                        id: true,
                        title: true,
                        slug: true,
                        content: false
                    }
                    
                }
            }
        })
        .then(res => {
            success(res);
        })
    },
    addPost: (post, token, success) => {
        console.log("We are adding", post);
        axios.post(`${host}/api/Posts?access_token=${token}`, post)
        .then(res => {
            success(res);
        });
    },
    updatePost: (post, token, success) => {
        axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
        .then(res => {
            success(res);
        })
    },
    getSinglePost: (id, token, success) => {
        axios.get(`${host}/api/Posts/${id}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'PostImage'
                }
            }
        })
        .then(res => {
            success(res);
        });
    },
    uploadImage: (data, token, postId, userId, success) => {
        axios.post(`${host}/api/PostImages/upload?post_id=${postId}&access_token=${token}&user_id=${userId}`, data)
        .then(res => {
            success(res);
        })
    },
    getPostBySlug: (slug, token, success) => {
        axios.get(`${host}/api/Posts/findOne?access_token=${token}`, {
            params: {
                filter: {
                    where: {slug: slug},
                    include: {Comments: 'Profile'}
                }
            }
        }).then(res => {
            success(res);
        })
    },
    getCommentById: (commentId, token, success) => {
        axios.get(`${host}/api/Comments/${commentId}?access_token=${token}`, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        }).then(res => {
            success(res);
        })
    },
    postComment: (comment, token, success) => {
        axios.post(`${host}/api/Comments?access_token=${token}`, comment, {
            params: {
                filter: {
                    include: 'Profile'
                }
            }
        })
        .then(res => {
            success(res);
        })
    }
}

export default API;