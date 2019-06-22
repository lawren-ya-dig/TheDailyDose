export const setUser = (user) => {
    return {
        type:"set_user",
        payload: user,
    }
}

export const setBlog = (blog) => {
    return {
        type:"set_blog",
        payload: blog,
    }
}