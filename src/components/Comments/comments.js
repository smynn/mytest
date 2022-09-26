import {useEffect, useState} from "react";
import {getComments, getPosts} from "../../services/user.services";
import Post from "./post";


export default function Comments() {
    let [inform, setInform] = useState([]);
    let [posts, setPosts] = useState(null);
    useEffect(()=>{
        getComments().then(value => setInform(value.data))
    },[])
    const postss = (id)=>{
getPosts(id).then(value => setPosts(value.data))
    }
    return(<div>
        {posts && JSON.stringify(posts)}
        <hr/>
        {inform.map(value => <Post key={value.id} item={value} postss={postss}/>)}
    </div>)

}