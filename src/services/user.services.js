import axios from 'axios';
let getUssers = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

const getUsers = ()=>{
    return getUssers.get('/users')
}

const getUser =(id)=>{
    return getUssers.get('/users/' + id)
}

const getTodos = ()=>{
    return getUssers.get('/todos')
}

const getAlbums = () => {
    return getUssers.get('/albums')
}

const getComments = () => {
    return getUssers.get('/comments')
}

const getPosts = (id) =>{
    return getUssers.get('/posts/' +id)
}

export {
    getUsers,
    getUser,
    getPosts,
    getComments,
    getTodos,
    getAlbums
}